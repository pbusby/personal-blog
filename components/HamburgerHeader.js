import styled from 'styled-components'
import Link from 'next/link'
import ToggleThemeBtn from './ToggleThemeBtn.js'
import { useTheme } from '../components/useTheme.js'
import { darkTheme, lightTheme } from '../components/Themes.js'
import { useContext } from 'react'
import { useUpdateMyTheme, MyThemeContext, MyThemeProvider } from '../context/global-data.js'
import { ThemeContext } from 'styled-components'
import SvgHamburgerMenu from '../public/images/HamburgerMenu.js'
import SvgAirplaneLogo from '../public/images/AirplaneLogo.js'
import SvgArrivals from '../public/images/Arrivals.js'


const Wrapper = styled.div`
  background: ${({ theme }) => theme.nav};
  transition: all 0.50s linear;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 20px 20px 0 20px;
  div {
    display: flex;
    width: 100 px;
    align-items: center;
    svg {
      margin-right: 20px;
      :hover {
        fill: #66c2a4;
      }
    }
  }


  h2 {
    padding: 10px 30px;
    letter-spacing: 2px;
  }
  img {
    display: block;
  }
`
const HomeLogo = styled.span`
  font-size: 20px;
  padding: 10px;
  font-family: Sarabun;
  border: 6px solid;
`

const Header = (props) => {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const state = useContext(MyThemeContext)
  const currentTheme = useContext(ThemeContext)

  return (
    <Wrapper>
      <div>
      <SvgHamburgerMenu fill={themeMode.text}/>
      <Link href="/">
        {/* <SvgAirplaneLogo fill={themeMode.text}/> */}
        <SvgArrivals theme={themeMode} className='logo-badge-back next-link' />
      </Link>
      </div>
      <MyThemeContext.Consumer>
      {(state) =>
        <ToggleThemeBtn onClick={state.updateTheme(themeMode)} themeMode={themeMode} toggleTheme={toggleTheme}>
        </ToggleThemeBtn>
      }
      </MyThemeContext.Consumer>
    </Wrapper>
  )
}

export default Header;
