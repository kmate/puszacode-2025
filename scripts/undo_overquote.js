const fs = require('fs');
const path = require('path');

const tasksDir = path.join(__dirname, '../public/tasks');
const files = fs.readdirSync(tasksDir).filter(f => /^day-\d+\.md$/.test(f));

function removeAllBackquotes(text) {
  // Do not touch fenced code blocks
  const fences = text.match(/```[\s\S]*?```/g) || [];
  const parts = text.split(/```[\s\S]*?```/g);

  const processed = parts.map(part => {
    // Remove ALL backticks outside of code fences
    return part.replace(/`/g, '');
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
  const updated = removeAllBackquotes(original);
  if (updated !== original) {
    fs.writeFileSync(p, updated);
    console.log(`Removed all backticks from ${file}`);
  } else {
    console.log(`No backticks to remove in ${file}`);
  }
}
