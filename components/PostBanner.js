import styled from 'styled-components';
import ProgressiveImage from './ProgressiveImage';
import LazyLoad from 'react-lazyload';

const BannerContainer = styled.div`
  position: relative;
  // height: 1000px;
  margin-bottom: 40px;
`
// Great tutorial: https://morioh.com/p/13418b8ad91e
// S3 bucket costs logs setup info: https://aws.amazon.com/premiumsupport/knowledge-center/s3-find-bucket-cost/
// NOTE: to do background iamges with the next.js image comp, need to use layout fill with these props:
// additionally, the objectFit and objectPosition props allow us to have the image centered and responsive to viewport movement
  // className='bannerImage'
  // src={`https://res.cloudinary.com/dtb2b6cpx/image/upload/${props.bannerPath}`}
  // alt="Picture of the author"
  // layout='fill'
  // objectFit='cover'
  // objectPosition='center'
  // placeholder='blur'
  // blurDataURL={`https://res.cloudinary.com/dtb2b6cpx/image/upload/${props.bannerPath}`}

const PostBanner = (props) => {
  //https://nextjs.org/docs/api-reference/next/image

  return (
    <LazyLoad>
    <BannerContainer className="aspect-w-16 aspect-h-9">
      <ProgressiveImage originalFileName={props.bannerPath} blurDataUrl={props.blurDataUrl} />
    </BannerContainer>
    </LazyLoad>
  )
}

export default PostBanner;