import React from "react";
import styled from 'styled-components'
import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from 'styled-components'
import Tag from './Tag.js'
import SvgArrowDownCircle from '../public/images/arrow-down-circle'
import Portugal from './Portugal.js'
import Belgium from './Belgium.js'
import LazyLoad from 'react-lazyload';
import RegionalMap from "@/components/RegionalMap";

const HeaderContainer = styled.section`
	// had to add this duplicate because of webkit transition delay bug
	// https://stackoverflow.com/questions/22069877/css-transitions-strange-unwanted-delay-in-webkit-browsers-chrome-and-safari
	color: var(--color-text);
	background: var(--color-nav);
	width: 100%;
	position: relative;
	min-height: 300px;
	// max-height: 400px;
`

const TitleContainer = styled.div`
	padding: 20px;
	// position: absolute;
	// top: 50%;
	// left: 50%;
	// transform: translate(-50%, -50%);
	// display: flex;
	// justify-content: space-around;
	// align-items: center;
	// width: 75%;
	// text-align: center;
	// margin: 0 auto;
`

const Title = styled.h1`
	font-size: 50px;
	// margin-right: 50px;
	text-align: left;
	line-height: 1;
	margin-bottom: 20px;
	max-width: 425px;
	div {
		margin-top: 20px;
		margin-left: 5px;
	}
`

const Teaser = styled.div`
  border-left: ${({ bottom }) => (bottom ? '3px solid gray' : '')};
  padding-left: 10px;

  p {
    font-style: italic;
  }
  h6 {
    font-family: 'Sarabun';
    font-weight: 700;
    font-size: 16px;
    margin-left: 20px;
  }
  tags {
    margin
  }
  svg {
    margin: 0;
    cursor: pointer;
  }
  max-width: 85%;
  div {
    // margin-top: 20px;
    display: flex;
  }
`
// https://freevectormaps.com/portugal/PT-EPS-01-0002?ref=search_result
// https://mapchart.net/portugal.html
const Map = styled.div`
	height: 250px;
	max-width: 330px;
	text-align: center;
	// padding: 20px;
	// border: 3px solid gray;
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`

const Date = styled.p`
	font-size: 10px;
`

const PostHeader = React.forwardRef((props, ref) => {
	const themeContext = useContext(ThemeContext)
	const tags = props.frontmatter.tags?.split(',')
	const mapNode = useRef()
	useEffect(() => {
		const mapSvg = mapNode.current
		const regionPath = mapSvg?.children ? mapSvg?.children[props.frontmatter.mapRegion] : undefined
		if (regionPath) {
			regionPath.style.transition = 'all 0.5s linear'
			setTimeout(() => {
				regionPath.style.fill = '#43978c'
			}, 100)
		}
	})
	return (
		<HeaderContainer ref={ref} className="mx-auto p-5">
			{/* <h1>{`Current theme: ${JSON.stringify(themeContext)}`}</h1> */}
			<TitleContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3">
				<Title className="col-span-2 md:col-span-1">
					{props.frontmatter.title}
				</Title>
				<Teaser bottom={true} className="hidden lg:block">
					<Date>{props.frontmatter.date}</Date>

					<p>{props.frontmatter.teaser}</p>
					<div className="flex items-center">
						<div>
							{tags?.map((tag) => (
								<Tag theme={themeContext} text={tag}></Tag>
							))}
						</div>
						<SvgArrowDownCircle
							onClick={props.scrollCallback}
							theme={themeContext}
							className="inline ml-4 mb-2"
						></SvgArrowDownCircle>
					</div>
					<div className="flex">
						{/* <h6 onClick={props.scrollCallback}>Read on</h6> */}
					</div>
				</Teaser>
				{/* <a href="https://mapchart.net/portugal.html"> */}
				<div
					style={{ height: '250px', width: '250px' }}
					className="hidden md:block"
				>
					{/* <SvgMySvg theme={themeContext} ref={mappity}></SvgMySvg> */}
					<LazyLoad height={250}>
					<RegionalMap countryName={props.frontmatter.country} theme={themeContext} grandChildRef={mapNode}></RegionalMap>
					</LazyLoad>
				</div>

				{/* <Map id="regions_div" className="hidden md:block"> */}
				{/* {themeContext.name === 'dark'
            ? <img src="/images/pt_map_darkmode_5.png"></img>
            : <img src="/images/pt_map_lightmode_5.png"></img>
          } */}

				{/* </Map> */}
				{/* </a> */}
			</TitleContainer>
			<Teaser bottom={false} className="block lg:hidden col-span-2 p-5">
				<Date>{props.frontmatter.date}</Date>

				<p>{props.frontmatter.teaser}</p>
				<div className="flex items-center">
					<div>
						{tags?.map((tag) => (
							<Tag theme={themeContext} text={tag}></Tag>
						))}
						<SvgArrowDownCircle
							onClick={props.scrollCallback}
							theme={themeContext}
							className="inline ml-4 mb-2"
						></SvgArrowDownCircle>
					</div>
				</div>
			</Teaser>
		</HeaderContainer>
	)
});

export default PostHeader
