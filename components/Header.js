import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`

  h2 {
    padding: 10px 30px;
    letter-spacing: 2px;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <header className="">
        <div className="mx-auto flex justify-around max-w-md">
          <Link href='/'>
            <h2>HOME</h2>
          </Link>
          <Link href='/'>
            <h2>ABOUT</h2>
          </Link>
          <Link href='/'>
            <h2>CONTACT</h2>
          </Link>
          <Link href='/'>
            <h2>CODE</h2>
          </Link>
        </div>
      </header>
    </Wrapper>
  )
}
