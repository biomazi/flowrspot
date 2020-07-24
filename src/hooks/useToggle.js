import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);

  return [toggle, useCallback(() => setToggle(status => !status), [])];
}

export default useToggle;
