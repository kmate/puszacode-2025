// Optimize reward JPGs: resize to max width 1200, strip metadata, set quality
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', 'public', 'assets');

async function optimize(file) {
  const inPath = path.join(assetsDir, file);
  const tmpOut = path.join(assetsDir, file.replace(/\.jpg$/i, '.optimized.jpg'));
  try {
    await sharp(inPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(tmpOut);
    await fs.promises.rename(tmpOut, inPath);
    console.log('Optimized:', file);
  } catch (e) {
    console.error('Failed:', file, e.message);
  }
}

(async () => {
  const files = await fs.promises.readdir(assetsDir);
  const targets = files.filter(f => /day-(1|2)-[a-f0-9]{64}\.jpg$/i.test(f));
  if (targets.length === 0) {
    console.log('No matching reward JPGs found.');
    return;
  }
  for (const f of targets) {
    await optimize(f);
  }
})();
