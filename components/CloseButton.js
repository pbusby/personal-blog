import * as React from 'react'

const CloseButton = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" strokeWidth={"5"} viewBox="0 0 256 256" width={26} height={26} {...props}>
		<rect  fill="none" strokeWidth={5} />
		<path fill="var(--color-text)" strokeWidth={0.2} d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm37.65625,130.34375a7.99915,7.99915,0,1,1-11.3125,11.3125L128,139.3125l-26.34375,26.34375a7.99915,7.99915,0,0,1-11.3125-11.3125L116.6875,128,90.34375,101.65625a7.99915,7.99915,0,0,1,11.3125-11.3125L128,116.6875l26.34375-26.34375a7.99915,7.99915,0,0,1,11.3125,11.3125L139.3125,128Z" />
	</svg>
)

export default CloseButton
