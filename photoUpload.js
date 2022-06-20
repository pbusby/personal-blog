require('dotenv').config()
const fs = require('fs')
const sharp = require('sharp')
const AWS = require('aws-sdk')
const path = require('path')

console.log('Photocopier at work...please hold')
const sizesMap = ['original', 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
const PHOTOS_FOLDER_PATH = path.join(process.cwd(), './photoUploads')
const files = fs.readdirSync(PHOTOS_FOLDER_PATH)
console.log('files are', files)

async function generatePhotoVariants(fileName) {
	await Promise.all(sizesMap.map((s) => resizeImage(s, fileName)))
}

async function processPhotosBatch() {
	await Promise.all(
		files.map(async (file) => {
			if (file.includes('.jpg') || file.includes('.jpeg')) {
				console.log(file)
				await generatePhotoVariants(file)
			}
		})
	)
	const imageFileNames = fs.readdirSync(PHOTOS_FOLDER_PATH).filter((file) => {
		return fs.statSync(PHOTOS_FOLDER_PATH + '/' + file)
	})

	Promise.all(imageFileNames.map((f) => readAndUploadFile(f)))
	console.log('ImageFileNames after processing are:', imageFileNames)
}

async function resizeImage(s, fileName) {
	try {
		if (typeof s === 'number') {
			await sharp(`./photoUploads/${fileName}`)
				.resize(s, undefined)
				.toFormat('jpeg', { mozjpeg: true })
				.toFile(`./photoUploads/${fileName.split('.jpg')[0]}-${s}.jpeg`)
		} else {
			await sharp(`./photoUploads/${fileName}`)
				.toFormat('jpeg', { mozjpeg: true })
				.toFile(`./photoUploads/${fileName.split('.jpg')[0]}-${s}.jpeg`)
		}
	} catch (error) {
		console.log(error)
	}
}

console.log("I'm yo pusha man")

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

console.log(
	fs.readdirSync(PHOTOS_FOLDER_PATH).filter((file) => {
		return fs.statSync(PHOTOS_FOLDER_PATH + '/' + file)
	})
)

function readAndUploadFile(fileName) {
	console.log('fake upload yo')
	// const fileContent = fs.readFileSync(path.resolve(__dirname, `./photoUploads/${fileName}`));
	// const params = {
	//   Bucket: process.env.AWS_BUCKET_NAME,
	//   Key: fileName,
	//   Body: fileContent
	// }
	// console.log(fileContent);
	// s3.upload(params, (err, data) => {
	//   if (err) {
	//     console.log(err)
	//   } else {
	//     console.log("Uploaded file:", fileName);
	//   }
	// })
}

processPhotosBatch()
