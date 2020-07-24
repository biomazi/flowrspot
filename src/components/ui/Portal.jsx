import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  const [element, setElement] = useState(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    }
  }, [modalRoot, element])

  return createPortal(children, element);
}

export default Portal;
