import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 15px;
`;

const StyledModalWrapper = styled.div`
  width: 500px;
  height: 600px;
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalTitle = styled.h3`
  text-transform: uppercase;
`

const Modal = ({ onClose, children, title, description, actions }) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const modalWrapperRef = useRef();


  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener('click', backDropHandler);
    // remove event listener when modal is closed using a useEffect cleanup function
    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const backDropHandler = (e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  }

  const modalContent = (
    <StyledModalOverlay>
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleClose}>X</a>
          </StyledModalHeader>
          {title && <StyledModalTitle>{title}</StyledModalTitle>}
          <StyledModalBody>
            {children}
            <p>{description}</p>
            <div>{actions}</div>
          </StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}

export default Modal;