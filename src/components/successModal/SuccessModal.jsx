import React from "react";
import backgroundStar from "./../images/backgroundStar.svg";
import checkMark from "./../images/checkMark.svg";
import back_logo from "./../images/back_logo.svg";
import "./SuccessModal.css";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="success-modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-background-layer-1"></div>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-stars">
          {[...Array(10)].map((_, index) => (
            <img
              key={index}
              src={backgroundStar}
              alt="star"
              className={`star star-${index}`}
            />
          ))}
        </div>
        <img src={checkMark} alt="mark" className="modal-checkmark" />
        <h2 className="modal-title">Informationen zur Verarbeitung</h2>
        <p className="modal-text">
          Unser Berater wird sich in Kürze mit Ihnen in Verbindung setzen.
          <br />
          Warten Sie auf einen Anruf
        </p>
        <button className="modal-button" onClick={onClose}>
          <div className="modal-button-text">
            <img alt="back" src={back_logo} />
            <span>Zurück zur Seite</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
