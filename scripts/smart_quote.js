const fs = require('fs');
const path = require('path');

const tasksDir = path.join(__dirname, '../public/tasks');
const files = fs.readdirSync(tasksDir).filter(f => /^day-\d+\.md$/.test(f)).sort((a, b) => {
  const na = parseInt(a.match(/\d+/)[0]);
  const nb = parseInt(b.match(/\d+/)[0]);
  return na - nb;
});

function smartQuote(text) {
  // Preserve code fences
  const fences = text.match(/```[\s\S]*?```/g) || [];
  const parts = text.split(/```[\s\S]*?```/g);

  const processed = parts.map(part => {
    // 1. Quote "Write a method called X" → "Write a method called `X`"
    part = part.replace(/Write a method called ([A-Za-z_][A-Za-z0-9_]*)/g, 'Write a method called `$1`');
    
    // 2. Quote "Write a method X(params)" → "Write a method `X(params)`"
    part = part.replace(/Write a method ([A-Za-z_][A-Za-z0-9_]*\s*\([^)]*\))/g, 'Write a method `$1`');
    
    // 3. In "Your task:" section, quote function calls like functionName(...) 
    part = part.replace(/(\*\*Your task:\*\*[\s\S]*?)([A-Za-z_][A-Za-z0-9_]*)\(([^)]*)\)/g, (match, prefix, fn, args) => {
      return prefix + '`' + fn + '(' + args + ')`';
    });
    
    // 4. In hints, quote standard library methods and key identifiers
    // Match Set, List, Map when followed by space or punctuation
    part = part.replace(/\b(Set|List|Map|Arrays|Collections|Character|String|Integer|Math)\b/g, '`$1`');
    
    // Quote method calls in hints like split, toUpperCase, toLowerCase, etc
    part = part.replace(/\b([a-z][A-Za-z]*)\(\)/g, '`$1()`');
    
    // 5. Quote expressions like (len+1)/2
    part = part.replace(/\(([a-z]+\+\d+)\)\/\d+/g, '`($1)/$2`');
    
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
  const updated = smartQuote(original);
  if (updated !== original) {
    fs.writeFileSync(p, updated);
    console.log(`Smart-quoted ${file}`);
  } else {
    console.log(`No changes for ${file}`);
  }
}
