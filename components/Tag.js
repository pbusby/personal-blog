import styled from 'styled-components'

const TagElement = styled.span`
  padding: 6px;
  background: gray;
  color: white;
  font-size: 10px;
  margin-right: 4px;
  text-transform: uppercase;
  font-style: normal;
  font-family: Sarabun;
  border-radius: 4px;
`

const Tag = ({ theme, text }) => {
  return (
    <TagElement>{text}</TagElement>
  )
}

export default Tag;