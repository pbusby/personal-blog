import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-around;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Link href="https://www.google.com"><h2>Contact</h2></Link>
      <Link href="https://www.google.com"><h2>Gallery</h2></Link>
      <Link href="https://www.google.com"><h2>About</h2></Link>
    </FooterContainer>
  )
}

export default Footer