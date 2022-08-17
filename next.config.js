const withSvgr = require("next-svgr");

// npx @svgr/cli --no-svgo --ref components/mySmolSvg.svg > components/MapOfPortugal.js


module.exports = withSvgr({
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com'],
  },
})

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: true,
// })
// module.exports = withBundleAnalyzer({})


