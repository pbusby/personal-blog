import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const POSTS_PATH = path.join(process.cwd(), 'data/posts')

export const getSourceOfFile = (folderName) => {
	console.log(path.join(POSTS_PATH, '/', folderName, '/', folderName + '.mdx'))
	return fs.readFileSync(
		path.join(POSTS_PATH, '/', folderName, '/', folderName + '.mdx')
	)
}

export const getAllPosts = () => {
	console.log(
		fs.readdirSync(POSTS_PATH).filter((file) => {
			return fs.statSync(POSTS_PATH + '/' + file).isDirectory()
		})
	)

	return fs
		.readdirSync(POSTS_PATH)
		.filter((file) => {
			return fs.statSync(POSTS_PATH + '/' + file).isDirectory()
		})
		.map((fileName) => {
			const source = getSourceOfFile(fileName)
			const slug = fileName.replace(/\.mdx?$/, '')
			const { data } = matter(source)

			return {
				frontmatter: data,
				slug: slug,
			}
		})
}

export const getSinglePost = async (slug) => {
	const source = getSourceOfFile(slug)

	const { code, frontmatter } = await bundleMDX(source, {
		cwd: POSTS_PATH + '/' + slug,
		esbuildOptions: (options) => {
			options.platform = 'node'
			return options
		},
	})

	return {
		frontmatter,
		code,
	}
}
