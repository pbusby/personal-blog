import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import CloseButton from "@/components/CloseButton";

const MenuBody = styled.nav`
	width: 300px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	transition: 1s transform;
	&.drawer-closed {
		transform: translateX(-100%);
	}
	&.drawer-opened {
		transform: translateX(0);
	}
`

const Content = styled.div`
	position: relative;
	padding: 30px;
	ul {
		li {
			padding-bottom: 20px;
			.sliding-underline {
				cursor: pointer;
				background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px
					no-repeat;
				transition: 0.5s;
			}
			.sliding-underline:hover {
				--d: 100%;
			}
		}
		h2 {
			display: inline-block;
			padding-bottom: 10px;
			font-size: 16px;
		}
	}
`

// const ModalHeader = styled.div`
//   height: 20px;

// `

const CloseBtnContainer = styled.div`
	position: absolute;
	right: 15px;
	top: 10px;
	cursor: pointer;
`

const StyledBackdrop = styled.div`
	&.activated {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		transition: background-color 1s ease-in-out;
	}
`

const Backdrop = ({ toggleMenu, menuStatus }) => {
	return (
		<StyledBackdrop
			className={menuStatus ? 'activated' : ''}
			onClick={() => toggleMenu(false)}
		></StyledBackdrop>
	)
}

const MenuContent = ({ toggleMenu, menuStatus }) => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<>
			<Backdrop menuStatus={menuStatus} toggleMenu={toggleMenu} />
			<MenuBody className={menuStatus ? 'drawer-opened' : 'drawer-closed'}>
				<Content>
					<CloseBtnContainer
						className=""
						onClick={() => toggleMenu(false)}
					><CloseButton /></CloseBtnContainer>
					<ul>
						<li>
							<Link href="/">
								<h2 className="sliding-underline">About</h2>
							</Link>
						</li>
						<li>
							<Link href="/">
								<h2 className="sliding-underline">Contact</h2>
							</Link>
						</li>
						<li>
							<Link href="/">
								<h2 className="sliding-underline">Photography</h2>
							</Link>
						</li>
					</ul>
				</Content>
			</MenuBody>
		</>
	)
}

const SideDrawer = ({ toggleMenu, menuStatus }) => {
	const [isBrowser, setIsBrowser] = useState(false)
	useEffect(() => {
		setIsBrowser(true)
	}, [])

	if (isBrowser) {
		return ReactDOM.createPortal(
			<MenuContent toggleMenu={toggleMenu} menuStatus={menuStatus} />,
			document.getElementById('hamburger-root')
		)
	} else {
		return null
	}
}

export default SideDrawer
