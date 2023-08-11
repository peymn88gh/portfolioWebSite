import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" role="dialog" aria-modal="true">
      <div className="rounded-lg shadow-lg" role="document">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
