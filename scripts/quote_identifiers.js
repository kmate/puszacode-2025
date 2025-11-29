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
    // Wrap function identifiers like name(), snake_case(), camelCase()
    part = part.replace(/\b([A-Za-z_][A-Za-z0-9_]*\s*)\(\)/g, '`$1()`');
    // Wrap methods with args e.g., computeSum(int, int)
    part = part.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)/g, (m, fn, args) => `\`${fn}(${args})\``);
    // Wrap PascalCase likely types/classes
    part = part.replace(/\b([A-Z][a-zA-Z0-9_]{2,})\b/g, '`$1`');
    // Wrap snake_case and camelCase words of length >=3
    part = part.replace(/\b([a-z]+[A-Za-z0-9_]{2,})\b/g, (m, w) => {
      // Heuristic: skip common English words to reduce false positives
      const skip = new Set(['the','and','for','with','when','then','into','from','this','that','these','those','you','are','will','should','must','can','sum','max','min','array','list','string','int','long','double','char','class','method','function','return','example','input','output','constraints','note']);
      if (skip.has(w.toLowerCase())) return m;
      // Skip already-backticked
      return `\`${m}\``;
    });
    // Avoid double quoting: compress ``` into single backticks if accidentally inside
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
