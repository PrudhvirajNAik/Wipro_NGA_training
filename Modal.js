import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}> {/* Close on overlay click */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent modal close on content click */}
        {children}
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>,
    document.getElementById('portal-root') // Mounts in portal-root
  );
};

export default Modal;