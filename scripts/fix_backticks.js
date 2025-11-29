const fs = require('fs');
const path = require('path');

const tasksDir = path.join(__dirname, '../public/tasks');
const files = fs.readdirSync(tasksDir).filter(f => /^day-\d+\.md$/.test(f));

function fixDoubleBackticks(text) {
  // Preserve code fences
  const fences = text.match(/```[\s\S]*?```/g) || [];
  const parts = text.split(/```[\s\S]*?```/g);

  const processed = parts.map(part => {
    // Fix patterns like ``something``
    part = part.replace(/``([^`]+)``/g, '`$1`');
    
    // Fix patterns like ```something`
    part = part.replace(/```([^`]+)`/g, '`$1`');
    
    // Fix patterns like `something```
    part = part.replace(/`([^`]+)```/g, '`$1`');
    
    // Fix patterns like ````something`
    part = part.replace(/````([^`]+)`/g, '`$1`');
    
    // Fix any remaining multiple backticks (3 or more in a row outside of fences)
    part = part.replace(/`{3,}/g, '`');
    
    return part;
  });

  // Reinsert fences
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
  const updated = fixDoubleBackticks(original);
  if (updated !== original) {
    fs.writeFileSync(p, updated);
    console.log(`Fixed double backticks in ${file}`);
  } else {
    console.log(`No fixes needed for ${file}`);
  }
}
