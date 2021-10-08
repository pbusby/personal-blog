import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  background-color: blue;
  h2 {
    padding: 10px 30px;
    color: white;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <header>
        <Link href='/'>
          <h2>Pauls Blog</h2>
        </Link>
      </header>
    </Wrapper>
  )
}
