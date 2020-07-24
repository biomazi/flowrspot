import React, { createContext } from 'react';

export const MenuContext = createContext({});

const MenuProvider = ({ value, children, ...otherProps }) => {
  return (
    <MenuContext.Provider value={{ ...value, ...otherProps }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider;