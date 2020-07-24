import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import LoginContainer from 'containers/login/LoginContainer';
import RegisterContainer from 'containers/register/RegisterContainer';
import { StateContext as SessionContext } from 'context/StateProvider';

const UserLogin = () => {
  const { authToken } = useContext(SessionContext);
  const isLoggedIn = !!authToken;
  return (
    isLoggedIn
      ? <UserInfo />
      : (
        <>
          <LoginContainer />
          <RegisterContainer />
        </>
      )
  )
}

export default UserLogin;
