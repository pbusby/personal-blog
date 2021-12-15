import styled from 'styled-components';
import Image from 'next/image';

const BannerContainer = styled.div`
  position: relative;
  height: 1000px;
  margin-bottom: 40px;
`

const PostBanner = (props) => {
  //https://nextjs.org/docs/api-reference/next/image

  return (
    <BannerContainer>
      <Image
        className='bannerImage'
        src={`https://res.cloudinary.com/dtb2b6cpx/image/upload/${props.bannerPath}`}
        alt="Picture of the author"
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        placeholder='blur'
        blurDataURL={`https://res.cloudinary.com/dtb2b6cpx/image/upload/${props.bannerPath}`}
      />
    </BannerContainer>
  )
}

export default PostBanner;