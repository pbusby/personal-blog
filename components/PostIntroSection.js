import styled from 'styled-components'

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`

const Teaser = styled.p`
  font-style: italic;
`

const Date = styled.p`
  font-size: 10px;
`


const PostIntroSection = (props) => {
  return (
    <>
      <Title>{props.frontmatter.title}</Title>
      <Teaser>{props.frontmatter.teaser}</Teaser>
      <Date>{props.frontmatter.date}</Date>
    </>
  )
}

export default PostIntroSection