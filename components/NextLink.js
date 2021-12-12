import Link from 'next/link'
import styled from 'styled-components'

const LinkWrapper = styled.span`
`

const NextLink = (props) => { return (
  <LinkWrapper className="next-link">
    <Link href={props.myurl}></Link>
  </LinkWrapper>
  )
}

export default NextLink;