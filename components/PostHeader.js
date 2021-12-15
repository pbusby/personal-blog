import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import Tag from './Tag.js'

const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.nav};
  transition: all 0.50s linear;
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

const Teaser = styled.p`
  border-left: ${({ bottom }) => bottom ? '3px solid gray' : ''};
  padding-left: 10px;
  font-style: italic;
  max-width: 85%;
  div {
    margin-top: 20px;
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


const PostHeader = (props) => {

  const themeContext = useContext(ThemeContext)
  const tags = props.frontmatter.tags?.split(',')

  useEffect(() => {
    console.log('current theme', themeContext)
  })
  return (
    <HeaderContainer className="mx-auto p-5">
            {/* <h1>{`Current theme: ${JSON.stringify(themeContext)}`}</h1> */}
      <TitleContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3">
        <Title className="col-span-2 md:col-span-1">
          {props.frontmatter.title}
        </Title>
        <Teaser bottom={true} className="hidden lg:block">
          <Date>{props.frontmatter.date}</Date>

          {props.frontmatter.teaser}
          <div>
          {tags?.map((tag) => (
            <Tag theme={themeContext} text={tag}></Tag>
          ))}
          </div>
        </Teaser>
        <a href="https://mapchart.net/portugal.html">
        <Map className="hidden md:block">
          {themeContext.name === 'dark'
            ? <img src="/images/pt_map_darkmode_5.png"></img>
            : <img src="/images/pt_map_lightmode_5.png"></img>
          }
        </Map>
        </a>
      </TitleContainer>
      <Teaser bottom={false} className="block lg:hidden col-span-2 p-5">
        <Date>{props.frontmatter.date}</Date>

        {props.frontmatter.teaser}
        <div>
        {tags?.map((tag) => (
          <Tag theme={themeContext} text={tag}></Tag>
        ))}
        </div>
      </Teaser>
    </HeaderContainer>
  )
}

export default PostHeader