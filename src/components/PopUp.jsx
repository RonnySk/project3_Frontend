import React from "react";
import "../css/PopUp.css";

function Popup({ text, onClose }) {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("popup-container")) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup-container" onClick={handleClickOutside}>
      <div className="popup-content">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        <p className="popup-text">{text}</p>
      </div>
    </div>
  );
}

export default Popup;
