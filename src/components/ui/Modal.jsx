import React from 'react';
import Portal from './Portal';
import Backdrop from './Backdrop';
import styled from 'styled-components';

const StyledModalBody = styled.div`
  background-color: #FFFFFF;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1004;
  margin: auto;
  padding: 30px;
  width: 440px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 3px;

  @media (max-width: 767px) {
    top: 80px !important;
    padding: 80px 20px;
    width: 100vw !important;
    height: 100vh !important;
    background-color: #F2F2F2;

    form {
      background-color: #F2F2F2;
    }
  }
`

const StyledModalFooter = styled.div`
  width: 380px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: -33px;
  background-color: transparent;
`;

const StyledModalButton = styled.button`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  cursor: pointer;
  border: none;
  background: transparent;
  
  &:hover {
    opacity: 1;
  }
`;

const Modal = ({ className, children, toggle, open, closeText }) => (
  <Portal>
    {open && (
      <>
        <Backdrop clicked={toggle} show={open}></Backdrop>
        <StyledModalBody className={className}>
          {children}
          {closeText && (
            <StyledModalFooter>
              <StyledModalButton onClick={toggle}>{closeText}</StyledModalButton>
            </StyledModalFooter>
          )}
        </StyledModalBody>
      </>
    )}
  </Portal>
);


export default Modal;
