import styled from 'styled-components';
import Link from 'next/link';
import Arrivals from '../public/images/Arrivals.js';
import { useTheme } from '../components/useTheme.js';
import { darkTheme, lightTheme } from '../components/Themes.js';
import ToggleThemeBtn from './ToggleThemeBtn.js';
import { useUpdateMyTheme, MyThemeContext, MyThemeProvider } from '../context/global-data.js';
import { ThemeContext } from 'styled-components';
import { NextLink } from '../components/NextLink.js';
import { useState } from 'react';
import SvgHamburgerMenu from '../public/images/HamburgerMenu.js';
import { useRouter } from 'next/router';
import HamburgerMenu from '../components/HamburgerMenu.js';



const Wrapper = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.nav};
  h2 {
    padding: 30px 30px;
    letter-spacing: 2px;
  }
  transition: background 0.50s linear;
`

const LogoContainer = styled.div`
  display: flex;
  margin-left: ${({ isMobile }) => isMobile ? '10px' : '50px'};
  align-items: center;
  span {
    margin-right: 10px;
  }
  svg {
    cursor: pointer;
  }
`

const ThemeContainer = styled.div`
  position: absolute;
  right: 0px;
  margin-right: 20px;
`

const Header = ({isMobile}) => {

  const [theme, toggleTheme, componentMounted] = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const router = useRouter()
  const postPath = router.pathname.includes('/posts')
  const showNavLinks = !postPath && !isMobile

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
      <header className="">
      <Wrapper>
        <LogoContainer isMobile={isMobile} >
          {postPath && (
            <SvgHamburgerMenu
              fill={themeMode.text}
              onClick={() => toggleShowMenu()}
            />
          )
          }
          {showMenu && (
            <HamburgerMenu></HamburgerMenu>
          )
          }
          <Link href="/">
            <Arrivals className={postPath ? "logo-badge-rotated" : "logo-badge"} theme={themeMode}></Arrivals>
          </Link>
          {!postPath &&  <span className="logo-text">Arrivals</span>}

        </LogoContainer>
        {showNavLinks &&
          <div className="mx-auto flex justify-around max-w-md">
            <Link href='/'>
              <h2 className="next-link">About</h2>
            </Link>
            <Link href='/'>
              <h2 className="next-link">Contact</h2>
            </Link>
            <Link href='/'>
              <h2 className="next-link">Code</h2>
            </Link>
          </div>
        }
        <ThemeContainer>
          <MyThemeContext.Consumer>
            {(state) =>
              <ToggleThemeBtn onClick={state.updateTheme(themeMode)} themeMode={themeMode} toggleTheme={toggleTheme}>
              </ToggleThemeBtn>
            }
          </MyThemeContext.Consumer>
        </ThemeContainer>
        </Wrapper>

      </header>

  )
}

export default Header;
