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
  max-height: 400px;
`

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  // text-align: center;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 50px;
  // margin-right: 50px;
  text-align: left;
  line-height: 1;
  margin-bottom: 20px;
  width: 300px;
  div {
    margin-top: 20px;
    margin-left: 5px;
  }
`

const Teaser = styled.p`
  border-left: 3px solid gray;
  padding-left: 10px;
  font-style: italic;
  width: 250px;
  div {
    margin-top: 20px;
    display: flex;
  }
`
// https://freevectormaps.com/portugal/PT-EPS-01-0002?ref=search_result
// https://mapchart.net/portugal.html
const Map = styled.div`
  height: 250px;
  width: 250px;
  text-align: center;
  padding: 20px;
  // border: 3px solid gray;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  // background-image: url('/images/pt_map_darkmode_1.png');
  // background-size: cover;
  // background-position: center;
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
    <HeaderContainer>
            {/* <h1>{`Current theme: ${JSON.stringify(themeContext)}`}</h1> */}
      <TitleContainer>
        <Title>
          {props.frontmatter.title}
        </Title>
        <Teaser>
          <Date>{props.frontmatter.date}</Date>

          {props.frontmatter.teaser}
          <div>
          {tags?.map((tag) => (
            <Tag theme={themeContext} text={tag}></Tag>
          ))}
          </div>
        </Teaser>
        <a href="https://mapchart.net/portugal.html">
        <Map>
          {themeContext.name === 'dark'
            ? <img src="/images/pt_map_darkmode_5.png"></img>
            : <img src="/images/pt_map_lightmode_5.png"></img>
          }
        </Map>
        </a>
      </TitleContainer>
    </HeaderContainer>
  )
}

export default PostHeader