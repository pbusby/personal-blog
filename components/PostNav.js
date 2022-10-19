import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Arrivals from '../public/images/Arrivals.js'
import ToggleThemeBtn from './ToggleThemeBtn.js'
import { NavContext } from '../contexts/navContext.js'
import { useState } from 'react'
import SideDrawer from './SideDrawer.js'

const Nav = styled.nav`
	position: sticky;
	top: 0;
	height: 80px;
	width: 100%;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	padding: 0 1.25rem;
	&.shadowed {
		@media (max-width: 768px) {
			-webkit-box-shadow: 0 4px 12px -11px #222;
			-moz-box-shadow: 0 4px 12px -11px #222;
			box-shadow: 0 4px 12px -11px #222;
		}
	}

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		padding: 0 3rem;
	}
	h2 {
		padding: 30px 30px;
		letter-spacing: 2px;
	}
	z-index: 1;
`

const LogoContainer = styled.div`
	// display: flex;
	align-items: center;
	span {
		margin-right: 10px;
	}
	svg {
		cursor: pointer;
	}
`

const PostTitle = styled.h3`
	font-family: 'Sarabun';
	font-weight: 700;
	font-size: 18px;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
	&.visible {
		opacity: 1;
	}
`

const LogoText = styled.h3`
	margin-right: 20px;
	font-family: 'Sarabun';
	font-weight: 700;
	font-size: 30px;
`

const ThemeContainer = styled.div`
	justify-self: end;
	right: 0px;
`

const PostNav = ({ postTitle }) => {
	const [showMenu, setShowMenu] = useState(false)
	const [isPostHeaderVisible, setIsPostHeaderVisible] = useContext(NavContext)
	const [scrollPosition, setScrollPosition] = useState(0)
	console.log('scrollposition is', scrollPosition)

	useEffect(() => {
		setScrollPosition(window.scrollY)
	})
	// const postPath = router.pathname.includes('/posts')
	// const showNavLinks = !postPath

	const toggleShowMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
	<Nav className={"shadowed"}>
			<LogoContainer>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					{/* <SvgHamburgerMenu
						onClick={() => toggleShowMenu()}
					/> */}
					<SideDrawer
						toggleMenu={setShowMenu}
						menuStatus={showMenu}
					></SideDrawer>

					<LogoText className="icon">
						{/* <Link href="/"> */}
						<Arrivals
							className={'logo-badge-rotated'}
							onClick={() => toggleShowMenu()}
						></Arrivals>
						{/* </Link> */}
					</LogoText>

					<PostTitle
						className={
							scrollPosition > 0 && !isPostHeaderVisible ? 'visible' : ''
						}
					>
						{postTitle}
					</PostTitle>
				</div>
			</LogoContainer>
			<ThemeContainer>
				<ToggleThemeBtn />
			</ThemeContainer>
		</Nav>
	)
}

export default PostNav
