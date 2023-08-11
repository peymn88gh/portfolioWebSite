import React, { createContext, useContext, useId, useState } from 'react';
import {Alert} from 'components';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const id = useId()
  const [alert, setAlert] = useState(null);
  const [show, setShow] = useState(true);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setShow(true);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && <Alert type={alert.type} message={alert.message} show={show} setShow={setShow} />}
    </AlertContext.Provider>
  );
};
