import styled from "styled-components";
import Link from "next/link";
import SubscribeInput from "./SubscribeInput";

import InstagramLogo from "../public/images/InstagramLogo.js";
import GithubLogo from "../public/images/GithubLogo.js";

const FooterContainer = styled.footer`
padding: 0 3rem;
 display: grid;
 align-items: center;
 grid-template-columns: 1 / -1;
 h2 {
  letter-spacing: 2px;
 }
@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  h2 {
    padding-right: 60px;
   }
}
@media (min-width: 400px) {
  justify-content: space-between;
}
 height: 150px;
 background: ${(theme) => theme.body};
`

const LinksContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  h2 {
    padding-right: 20px;
  }
  @media (min-width: 768px) {
    h2 {
      padding-right: 45px;
     }
  }
`

const SocialIcons = styled.div`
  cursor: pointer;
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: space-between;
  svg {
    width: inherit;
    height: inherit;
  }
`
const LogoWrapper = styled.div`
  height: 20px;
  width: 20px;
`

const FlexGroup = styled.div`
  display: flex;
  @media (max-width: 400px) {
  justify-content: space-between;
  }

`

const Footer = () => {

  return (
    <FooterContainer>
      <SubscribeInput></SubscribeInput>
      {/* <FlexGroup> */}
      <LinksContainer>
        <Link href="https://www.google.com"><h2>About</h2></Link>
        <Link href="https://www.google.com"><h2>Contact</h2></Link>
        <Link href="https://www.google.com"><h2>Photography</h2></Link>
      </LinksContainer>
      <SocialIcons>
        <LogoWrapper>
          <InstagramLogo></InstagramLogo>
        </LogoWrapper>
        <LogoWrapper>
          <GithubLogo></GithubLogo>
        </LogoWrapper>
      </SocialIcons>
      {/* </FlexGroup> */}
    </FooterContainer>
  )
}

export default Footer