import styled from 'styled-components'
import Link from 'next/link'
import Arrivals from '../public/images/Arrivals.js'
import ToggleThemeBtn from './ToggleThemeBtn.js'
import { useState } from 'react'
import SvgHamburgerMenu from '../public/images/HamburgerMenu.js'
import { useRouter } from 'next/router'
import SideDrawer from './SideDrawer.js'

const Nav = styled.nav`
	// had to add this duplicate because of webkit transition delay bug
	// https://stackoverflow.com/questions/22069877/css-transitions-strange-unwanted-delay-in-webkit-browsers-chrome-and-safari
	color: var(--color-text); 
	position: sticky;
	top: 0;
	height: 80px;
	width: 100%;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	padding: 0 3rem;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	h2 {
		padding: 30px 30px;
		letter-spacing: 2px;
	}
	z-index: 1;
`

const LogoContainer = styled.div`
	align-items: center;
	span {
		margin-right: 10px;
	}
	svg {
		cursor: pointer;
	}
`

const LogoText = styled.h3`
	font-family: 'Sarabun';
	font-weight: 700;
	font-size: 30px;
`

const ThemeContainer = styled.div`
	justify-self: end;
	right: 0px;
	// margin-right: 20px;
`

const NavLinks = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: flex;
	}
`

const HomeNav = () => {
	const [showMenu, setShowMenu] = useState(false)
	const router = useRouter()
	const postPath = router.pathname.includes('/posts')
	const showNavLinks = !postPath

	const toggleShowMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<Nav>
			<LogoContainer>
				{postPath && <SvgHamburgerMenu onClick={() => toggleShowMenu()} />}
				{showMenu && (
					<SideDrawer
						toggleMenu={setShowMenu}
						menuStatus={showMenu}
					></SideDrawer>
				)}

				{!postPath && (
					<LogoText className="icon baseline">
						<Link href="/">
							<Arrivals className={'logo-badge'}></Arrivals>
						</Link>
						Arrivals
					</LogoText>
				)}
			</LogoContainer>
			{showNavLinks && (
				<NavLinks className="">
					<Link href="/">
						<h2 className="next-link">About</h2>
					</Link>
					<Link href="/">
						<h2 className="next-link">Contact</h2>
					</Link>
					<Link href="/">
						<h2 className="next-link">Photography</h2>
					</Link>
				</NavLinks>
			)}
			<ThemeContainer>
				<ToggleThemeBtn />
			</ThemeContainer>
		</Nav>
	)
}

export default HomeNav
