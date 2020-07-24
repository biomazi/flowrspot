import React, { createContext } from 'react';

export const StateContext = createContext({});

const StateProvider = ({ value, children, ...otherProps }) => {
  return (
    <StateContext.Provider value={{ ...value, ...otherProps }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider;