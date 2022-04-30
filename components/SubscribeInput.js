
import styled from "styled-components";
import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import SvgArrowCircleRight from '../public/images/arrow-right-circle';


const EmailFormContainer = styled.div`
  background: ${({theme}) => theme.body};
  input {
    background: ${({theme}) => theme.body};
    padding: 8px;
    outline: none;
    font-size: 12px;
  }
`

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid ${(theme) => theme.text};
`

const ButtonWrapper = styled.div`
  margin-right: 7px;
`
const Cta = styled.h4`
  position: absolute;
  top: -25px;
`

const SubscribeInput = () => {

  const themeContext = useContext(ThemeContext);
  const [emailInput, setEmailInput] = useState('');

  
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <EmailFormContainer>
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <Cta>Don't miss a flight...</Cta>
          <input value={emailInput} type="text" placeholder="Email Address" onChange={(e) => setEmailInput(e.target.value)}></input>
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