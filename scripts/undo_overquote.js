const fs = require('fs');
const path = require('path');

const tasksDir = path.join(__dirname, '../public/tasks');
const files = fs.readdirSync(tasksDir).filter(f => /^day-\d+\.md$/.test(f));

function undoOverQuote(text) {
  // Do not touch fenced code blocks
  const fences = text.match(/```[\s\S]*?```/g) || [];
  const parts = text.split(/```[\s\S]*?```/g);

  const processed = parts.map(part => {
    // Remove backticks around simple prose words (no parens/dots/underscores/numbers)
    // Keep function/method calls like foo(), bar(int)
    // Keep composite identifiers with _ or . or digits
    part = part.replace(/`([A-Za-z]+)`/g, (m, w) => {
      // If the word is a known type we want to keep quoted, leave it
      const keep = new Set(['String','List','Map','Set','Arrays','Collections']);
      if (keep.has(w)) return m;
      // Otherwise, dequote
      return w;
    });
    // Keep backquotes around function/method signatures
    // But if we accidentally quoted non-call with parentheses (e.g., text in parentheses), dequote when it does not look like identifier
    part = part.replace(/`([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)`/g, '`$1($2)`');
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
  const updated = undoOverQuote(original);
  if (updated !== original) {
    fs.writeFileSync(p, updated);
    console.log(`Dequoted prose in ${file}`);
  } else {
    console.log(`No dequote needed for ${file}`);
  }
}
