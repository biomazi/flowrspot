import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'assets/menu_profile_holder.svg';
import useAxios from 'hooks/useAxios';
import { useSessionContext } from 'hooks/useSessionContext';
import Modal from 'components/ui/Modal';
import Profile from 'components/profile/Profile';
import useToggle from 'hooks/useToggle';

const StyledUserInfo = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;  
  text-align: right;
  color: #949EA0;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 60px 110px;
  width: 600px;
  height: 610px;

  @media (max-width: 767px) {
    transform: translate(-50%);
    padding: 67px 37px;

    svg,div,span {
      background-color: #F2F2F2;
    }
    
  }
`;

const UserInfo = () => {
  const { authToken } = useSessionContext();
  const [open, setOpen] = useToggle(false);

  const { data } = useAxios(
    '/api/v1/users/me',
    { headers: { 'Authorization': authToken } }
  );
  
  return (
    <>
      <StyledUserInfo>{data?.user.first_name} {data?.user.last_name}</StyledUserInfo>
      <Avatar onClick={() => setOpen()} />
      <StyledModal toggle={setOpen} open={open} >
        <Profile user={data?.user} />
      </StyledModal>
    </>
  )
}

export default UserInfo;
