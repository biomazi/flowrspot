/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import Modal from 'components/ui/Modal';
import styled from 'styled-components';
import LoginForm from 'components/forms/LoginForm';
import useToggle from 'hooks/useToggle';
import Button from 'components/ui/Button';
import { MessageContext } from 'components/routing/Routes';

const StyledModal = styled(Modal)`
  top: 28%;
  transform: translate(-50%);
`;

const StyledButton = styled(Button)`
  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

const LoginContainer = () => {
  const [open, setOpen] = useToggle(false);
  const { loginToggleRef } = useContext(MessageContext);
  useEffect(() => {
    loginToggleRef.current = setOpen;
  }, [])

  return (
    <>
      <StyledButton basic clicked={() => setOpen()}>Login</StyledButton>
      <StyledModal toggle={setOpen} open={open} closeText="I don't want to Login" >
        <LoginForm />
      </StyledModal>
    </>
  )
};

export default LoginContainer;
