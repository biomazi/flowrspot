import React from 'react';
import RegisterForm from 'components/forms/RegisterForm';
import styled from 'styled-components';
import useToggle from 'hooks/useToggle';
import Modal from 'components/ui/Modal';
import Button from 'components/ui/Button';

const StyledModal = styled(Modal)`
  top: 28%;
  transform: translate(-50%);
`;

const RegisterContainer = () => {
  const [open, setOpen] = useToggle(false);

  return (
    <>
      <Button circular clicked={() => setOpen()}>New Account</Button>
      <StyledModal toggle={setOpen} open={open} closeText="I dont't want to register">
        <RegisterForm toggleRegister={setOpen} />
      </StyledModal>
    </>
  );
};

export default RegisterContainer
