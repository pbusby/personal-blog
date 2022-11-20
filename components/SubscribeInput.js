
import styled from "styled-components";
import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import SvgArrowCircleRight from '../public/images/arrow-right-circle';


const EmailFormContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    background-color: var(--color-background);
    padding: 8px;
    outline: none;
    font-size: 12px;
    border-radius: 4px;
  }
  @media (max-width: 400px) {
    justify-content: space-between;
    }
`

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
`

const ButtonWrapper = styled.div`
  margin-right: 7px;
`
const Cta = styled.h3`
  padding-right: 10px;
  font-size: 18px;
  // position: absolute;
  // top: -25px;
`

const SubscribeInput = () => {

  const themeContext = useContext(ThemeContext);
  const [emailInput, setEmailInput] = useState('');

  
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <EmailFormContainer>
      <Cta>Subscribe</Cta>
      <form onSubmit={onSubmit}>
        <InputWrapper> 
          <input value={emailInput} type="text" placeholder="your email" onChange={(e) => setEmailInput(e.target.value)}></input>
          {/* <button onClick={() => console.log(emailInput)}>Submit</button> */}
          <ButtonWrapper>
            <SvgArrowCircleRight
              theme={themeContext}
            ></SvgArrowCircleRight>
          </ButtonWrapper>
        </InputWrapper>
      </form>
    </EmailFormContainer>
  )

}

export default SubscribeInput;