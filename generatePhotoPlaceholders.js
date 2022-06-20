const POSTS_FOLDER_PATH = path.join(process.cwd(), './data/posts')

const postFilePaths = fs.readdirSync(POSTS_FOLDER_PATH)

export async function convertPlaceholdersToBase64 () {
  await Promise.all(files.map(async (file) => {
    if (file.includes('.jpg') || file.includes('.jpeg')) {
      console.log(file)
      await resizeImage(file);
    }
  }));
}

const searchAndReplaceImagePlaceholders = (base64String, imgFileName) => {
	postFilePaths.forEach((fp) => {
    const replaceOptions = {
      files: `./data/posts/${fp}/${fp}.mdx`,
      from: `imagePlaceholder: '${imgFileName.split('.jpg')[0]}'`,
      to: `imagePlaceholder: '${base64String}'`,
    }
    console.log('replace options are:', replaceOptions)
    replace.sync(replaceOptions)
  })
}

async function resizeImage (s, fileName) {
  try {
    const base64Buffer = await sharp(`./photoUploads/${fileName}`)
    .resize(s, undefined)
    .toBuffer()
    const base64Blurred = await sharp(base64Buffer)
    .blur(20)
    .toBuffer()
    const base64String = base64Blurred.toString('base64')
      searchAndReplaceImagePlaceholders(`data:image/jpg;base64,${base64String}`, fileName)
  } catch (error) {
    console.log(error);
  }
}
    