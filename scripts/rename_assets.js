const fs=require('fs');
const path=require('path');
const codes=require('../public/codes.json');
const assetsDir=path.join(__dirname,'../public/assets');
for(const [day,hash] of Object.entries(codes)){
  const hashFile=path.join(assetsDir,`${hash}.svg`);
  const dayFile=path.join(assetsDir,`day-${day}.svg`);
  const target=path.join(assetsDir,`day-${day}-${hash}.svg`);
  try {
    if(fs.existsSync(target)) continue;
    if(fs.existsSync(hashFile)){
      fs.renameSync(hashFile,target);
      console.log(`Renamed ${path.basename(hashFile)} -> ${path.basename(target)}`);
    } else if(fs.existsSync(dayFile)){
      fs.renameSync(dayFile,target);
      console.log(`Renamed ${path.basename(dayFile)} -> ${path.basename(target)}`);
    } else {
      console.log(`No source image for day ${day}`);
    }
  } catch (e) {
    console.error(`Failed renaming for day ${day}:`, e.message);
  }
}
const legacy = fs.readdirSync(assetsDir).filter(f=>/^day-\d+\.svg$/.test(f) || /^[0-9a-f]{64}\.svg$/.test(f));
if(legacy.length){
  console.log('Legacy files remaining:', legacy);
} else {
  console.log('All assets renamed successfully.');
}
