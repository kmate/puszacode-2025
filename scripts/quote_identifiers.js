const fs = require('fs');
const path = require('path');

const tasksDir = path.join(__dirname, '../public/tasks');
const files = fs.readdirSync(tasksDir).filter(f => /^day-\d+\.md$/.test(f));

function processSection(text) {
  // Avoid touching existing backticked segments
  // Split by code fences to avoid editing code blocks
  const parts = text.split(/```[\s\S]*?```/g);
  const fences = text.match(/```[\s\S]*?```/g) || [];

  const processed = parts.map(part => {
    // Only quote explicit identifiers:
    // 1) Functions/methods with parentheses (foo(), computeSum(int, int))
    part = part.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)/g, (m, fn, args) => {
      // Already quoted?
      if (/^`/.test(m) && /`$/.test(m)) return m;
      return `\`${fn}(${args})\``;
    });
    // 2) Known Java types and keywords when mentioned in prose (avoid broad PascalCase/snake/camel)
    const typeWords = ['String','int','long','double','char','List','Map','Set','Arrays','Collections'];
    typeWords.forEach(t => {
      const re = new RegExp('(^|[^`])\\b' + t + '\\b', 'g');
      part = part.replace(re, function(m, pre){ return pre + '`' + t + '`'; });
    });
    // Avoid double quoting artifacts
    part = part.replace(/``([^`]+)``/g, '`$1`');
    return part;
  });

  // Reinterleave parts and fences
  let out = '';
  for (let i = 0; i < processed.length; i++) {
    out += processed[i];
    if (i < fences.length) out += fences[i];
  }
  return out;
}

for (const file of files) {
  const p = path.join(tasksDir, file);
  const original = fs.readFileSync(p, 'utf8');
  const updated = processSection(original);
  if (updated !== original) {
    fs.writeFileSync(p, updated);
    console.log(`Updated identifiers in ${file}`);
  } else {
    console.log(`No changes for ${file}`);
  }
}
