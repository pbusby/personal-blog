console.log("I'm yo pusha man");
const fs = require('fs')
const sharp = require("sharp");

const sizesMap = [
  'original',
  640,
  750,
  828,
  1080,
  1200,
  1920,
  2048,
  3840
]

const dir = '/Users/paulbusby/code/personal-blog/photoUploads'
const files = fs.readdirSync(dir)

for (const file of files) {
  if (file.includes('.jpg') || file.includes('.jpeg')) {
    console.log(file)
    processBatch(file);
  }
}

function processBatch(fileName) {
  sizesMap.forEach(s => resizeImage(s, fileName));
}

async function resizeImage(s, fileName) {
  try {
    if (typeof(s) === 'number') {
      await sharp(`${fileName}.jpg`)
      .resize(s, undefined)
      .toFormat("jpeg", { mozjpeg: true })
      // .toFile(`${fileName}-${s}.jpeg`);
      .toFile(`./photoUploads/${fileName}-${s}.jpeg`);

    } else {
      await sharp(`${fileName}.jpg`)
      .toFormat("jpeg", { mozjpeg: true })
      .toFile(`./photoUploads/${fileName}-${s}.jpeg`);
    }
  } catch (error) {
    console.log(error);
  }
}
