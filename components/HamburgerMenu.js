import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MenuBody = styled.div`
  width: 300px;
  height: 500px;
  position: fixed;
  top: 100px;
  left: 0;
  background: black;
  color: white;
`

const HamburgerMenu = ({ onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const menuContent = (
    <MenuBody>
      <h1>I am a sidebar</h1>
    </MenuBody>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      menuContent,
      document.getElementById('hamburger-root')
    )
  }
  else {
    return null;
  }
}

export default HamburgerMenu;