import React from 'react';
import Modal from 'components/ui/Modal';
import Button from 'components/ui/Button';
import styled from 'styled-components';

const StyledText = styled.div`
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

const Message = ({ openMessage, setOpenMessage, loginToggleRef }) => {
  const { form, message } = openMessage;
  const handlers = {
    login: () => setOpenMessage({}),
    register: () => {
      setOpenMessage({});
      loginToggleRef.current();
    },
  }
  return (
    !!message && (
      <Modal open={!!message}>
        <StyledText>{message}</StyledText>
        <Button clicked={handlers[form]}>OK</Button>
        {form === 'login' && <StyledButton>PROFILE</StyledButton>}
      </Modal>
    )
  )
}

export default Message
