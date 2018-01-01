import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  color: red;
  border: 1px solid black;
  h1 {
    padding-top: 20px;
  }
`
// const Text = styled.h1`
// padding-top: 20px;

// `
const CompyRemix = (props) => (
  <Wrapper>
    <h1>Greetings {props.name}</h1>
  </Wrapper>
)

export default CompyRemix;