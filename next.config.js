const withSvgr = require('next-svgr')

// svgr --no-svgo --ref components/mySmolSvg.svg > components/MapOfPortugal.js
const path = require('path')

module.exports = withSvgr({
	reactStrictMode: true,
	images: {
		domains: ['picsum.photos', 'res.cloudinary.com'],
	},
	webpack(config) {
		config.resolve.alias['@'] = path.join(__dirname, './')
		return config
	},
})

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: true,
// })
// module.exports = withBundleAnalyzer({})
