import styled from "styled-components";
import Link from "next/link";
import SubscribeInput from "./SubscribeInput";
import { useContext } from "react";
import { ThemeContext } from "styled-components"

import InstagramLogo from "../public/images/InstagramLogo.js";
import GithubLogo from "../public/images/GithubLogo.js";

const FooterContainer = styled.div`
 width: 100%;
 display: flex;
 height: 150px;
 background: ${(theme) => theme.body};
 justify-content: space-around;
 align-items: center;
`

const LinksContainer = styled.div`
  cursor: pointer;
  width: 200px;
  display: flex;
  justify-content: space-between;
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

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <FooterContainer>
      <SubscribeInput></SubscribeInput>
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
    </FooterContainer>
  )
}

export default Footer