import React, { createContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FlashMsg from 'components/FlashMsg';

export const FlashContext = createContext();

export const FlashProvider = props => {
  const [flash, setFlash] = useState({message: '', status: ''});
  const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);

      return () => setMounted(false);
   }, []);

  const showFlashMesage = (message, status) => {
    console.log(message)
    setFlash({
      message: message,
      status: status
    })

    setTimeout(() => {
      setFlash({
        message: '',
        status: ''
      })
    },5000)
  };

  return (
    <FlashContext.Provider value={{flash, showFlashMesage}}>
      {props.children}

      {
        mounted
        ? createPortal(<FlashMsg flash={flash} />, document.getElementById('__next'))
        : null
      }
    </FlashContext.Provider>
  );
};

export default FlashProvider;