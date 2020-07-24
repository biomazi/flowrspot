import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StateProvider from 'context/StateProvider';
import Routes from 'components/routing/Routes';
import { useLocalStorage } from 'hooks/useLocalStorage';

const Session = () => {
  const [authToken, setAuthToken] = useLocalStorage('authToken', '');
  return (
    <StateProvider value={{ authToken, setAuthToken }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StateProvider>
  )
}

export default Session;
