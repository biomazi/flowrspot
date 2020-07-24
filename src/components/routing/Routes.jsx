import React, { useState, useRef } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from 'components/navbar/NavBar';
import HomeContainer from 'containers/home/HomeContainer';
import FlowersContainer from 'containers/flowers/FlowersContainer';
import Message from 'components/message/Message';

export const MessageContext = React.createContext()

const Routes = () => {
  const [openMessage, setOpenMessage] = useState({});
  const loginToggleRef = useRef(null);

  return (
    <MessageContext.Provider value={{ openMessage, setOpenMessage, loginToggleRef }}>
      <Message openMessage={openMessage} setOpenMessage={setOpenMessage} loginToggleRef={loginToggleRef} />
      <NavBar />
      <Route
        exact
        path="/"
        component={HomeContainer}
      />
      <Route
        exact
        path="/flowers"
        component={FlowersContainer}
      />
      <Route render={() => <Redirect to="/" />} />
    </MessageContext.Provider>
  )
}

export default Routes;
