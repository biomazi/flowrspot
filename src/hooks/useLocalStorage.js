import { useState } from "react";

export const useLocalStorage = (key, initValue) => {
  const getStoredValue = () => {
    try {
      const storedItem = window.localStorage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : initValue;
    } catch (error) {
      console.log(error)
      return initValue;
    }
  }
  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(undefined);
    } catch (error) {
      console.log(error);
    }
  }

  const clearStorage = () => {
    window.localStorage.clear();
  }

  return [storedValue, setValue, removeValue, clearStorage];
}
