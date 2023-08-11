import { useEffect, useState } from "react";
import './Alert.css';

const Alert = ({ type, message, show, setShow }) => {

    useEffect(() => {
          if (type === 'success' || type === 'failed' ) {
        const timer = setTimeout(() => {
          setShow(false);
        }, 2000);
  
        return () => clearTimeout(timer);
      }
    }, [type]);
  
    if (!show) return null;
  
    let bgColor, textColor;
    if (type === 'success') {
      bgColor = 'bg-green-500';
      textColor = 'text-white';
    } else if (type === 'loading') {
      bgColor = 'bg-yellow-500';
      textColor = 'text-black';
    } else if (type === 'failed') {
      bgColor = 'bg-red-500';
      textColor = 'text-white';
    }
  
    return (
      <div className={`alert ${bgColor} ${textColor}`}>
        <p>{message}</p>
      </div>
    );
  };
  export default Alert;