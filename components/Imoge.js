
import styled from 'styled-components';

// cloudFolder
// fileName
// https://arrivals-travel.s3.eu-west-1.amazonaws.com/azores_post/volcano_landscape_optimized-640.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLWVhc3QtMSJHMEUCIQCzEvR0TMer%2FcwPt8J%2BWTemMkoXJaApB0fLVfIjfNJjMAIgCA8vPK950bNR%2BAAsM5BLoF2oeAA6sKyeshu7HlKd5xcq5AIIFRAAGgwyMDA3Mjk5MzIzODYiDOAZ6H8w%2B7pO6O%2B%2FZyrBAsjDuXpqlddERS9EaVBZYyq7VsIMHJ40%2FNbBqS%2Fv8POcnOfBa4kogIXWbamdZIWNFjI8Uxhee4kMjoFmgdsnbrbcjBTaR1oHe9UZ72I8FJSKJpvDv5KsyweGvb6ih4nK2aLpDbnf2tBNEqGvJnqqMj1IVtgOuLEPFkotIjq4d2EgdMbTVIcj2gSJj21etQ595eS%2FfW3ZLps8CmEm%2BAx9jFEvbYLQkbMopF32FnyL1Vqed3nI3dCg%2Fxel0DqEvMdtiJI7AAXtqi%2BiSD6NpdJlq%2Bes%2FrETv1J61Wtf1gkuRBCeajNZ4s63WRkSlbURA00BfxiWbR36hMNF%2FUWjeddu9w2EiJD89hq5tEjS0eCs0533w2Oh%2F5aN7TzXxyXFpT1of9%2FoM84K1BBjATyQMQJCpQPaa4vq06oliiyvIM8UmHt%2B4jDwv7STBjqzAk%2BFfs%2FyN885YCnG1UC%2Bd0FrYZXD5k1b1KaQYpVJWkFItPlJNr%2BznTZTq2ju9%2FXPqzHCSySTWRJKhcsuruA6thYH51b172a%2FGt%2FG3AXYX4CuCUryLM8kSWQqMN5m4D%2BqE2wYKQW58w2m0Lpj0fLeThsiJ602kLRRq0JW%2BlJ2MCP3Ls9HIAYGaTNsgux60t4OIJcC1gYMzd5EGv9rNqpceytHOL4YvBHFcZ39ay9YfWuQZl8dYETxMaIf%2FWTjvsto%2FK%2BzwL4yQT%2FggwDe0UX6bu5Zb8kTqh04%2BABVhLgBBtQ%2BkH73XuHKmz7m6X31Jsdu7FKmT48k%2BtCKlxwOMpO8FOAvWLXp2cfvHkGzzo%2BSiuafECX9uAaIZb%2F00MEa5d2f5kr4OuqpoN3w8JnV11Pdxe06fEc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220430T120445Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS5PDPWJRM4JIVYQZ%2F20220430%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=51934c501f725fb9a78b410a2b3ca2da8581486c1705251d21c378a787ccac3a

// TODO: add a props input for developing the sizes attribute media queries if the image is not 100vw
// TODO: decide if you want to put images in folders in the s3. Here is the original example:
// `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${cloudFolder}/${originalFileName}-1080.jpeg`

const Imoge = ({cloudFolder, originalFileName}) => {
  const defaultImageUrl = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-1080.jpeg`

  const url640 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-640.jpeg`
  const url750 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-750.jpeg`
  const url828 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-828.jpeg`
  const url1080 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-1080.jpeg`
  const url1200 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-1200.jpeg`
  const url1920 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-1920.jpeg`
  const url2048 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-2048.jpeg`
  const url3840 = `https://arrivals-travel.s3.eu-west-1.amazonaws.com/${originalFileName}-3840.jpeg`

  return (
    <img 
      src={defaultImageUrl}
      srcSet={`${url640} 640w, ${url750} 750w, ${url828} 828w, ${url1080} 1080w, ${url1200} 1200w, ${url1920} 1920w, ${url2048} 2048w, ${url3840} 3840w`}
      style={{objectFit: 'cover', objectPosition: 'center', width: '0px', minWidth: '100%', minHeight: '100%', maxWidth: '100%', maxHeight: '100%'}}
    >
    </img>
  )
}

export default Imoge;