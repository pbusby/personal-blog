import styled from 'styled-components'
import Link from 'next/link'
import Arrivals from '../public/images/Arrivals.js'
import { useTheme } from '../components/useTheme.js'
import { darkTheme, lightTheme } from '../components/Themes.js'
import ToggleThemeBtn from './ToggleThemeBtn.js'
import { useUpdateMyTheme, MyThemeContext, MyThemeProvider } from '../context/global-data.js'
import { ThemeContext } from 'styled-components'
import { NextLink } from '../components/NextLink.js'



const Wrapper = styled.div`
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
  margin-left: 50px;
  align-items: center;
  span {
    margin-right: 10px;
  }
`

const ThemeContainer = styled.div`
  margin-right: 20px;
`

export default function Header() {

  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (



      <header className="">
      <Wrapper>
        <LogoContainer>
        <Arrivals className="logo-badge" theme={themeMode}></Arrivals>
        <span className="logo-text">Arrivals</span>

        </LogoContainer>
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
