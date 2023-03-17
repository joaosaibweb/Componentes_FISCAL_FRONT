import { useEffect, ReactNode } from 'react';
/* eslint-disable */
import ReactDOM from 'react-dom';

/* pega no arquivo index.html a div com id modal e usa como container */
const modalContainer = document.getElementById('modal');
const el = document.createElement('div');

interface DialogLoadingContainerProps {
  isOpen: boolean;
  children: ReactNode;
}


function DialogLoadingContainer({ children, isOpen }: DialogLoadingContainerProps) {
  useEffect(() => {
    if (isOpen) {
      modalContainer?.appendChild(el);
    } else {
      try {
        modalContainer?.removeChild(el);
      } catch (err) {
        // vazio
      }
    }
  }, [isOpen]);

  return ReactDOM.createPortal(children, el);
}

export default DialogLoadingContainer;
