import React, { useState } from 'react';
import Session from './components/session/Session';
import { createGlobalStyle } from 'styled-components';
import MenuProvider from 'context/MenuProvider';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    @media (max-width: 767px) {
      ${({ open }) => open && `overflow: hidden`}
    }
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: Ubuntu, Montserrat;
    background-color: #FFFFFF;
  }
  p {
    margin: 0;
  }
`

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <MenuProvider value={{ mobileMenu, setMobileMenu }}>
      <GlobalStyle open={mobileMenu} />
      <Session />
    </MenuProvider>
  );
}

export default App;
