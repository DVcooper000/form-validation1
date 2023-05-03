import React, { useState } from "react";
import "./RegistrationModal.css";
import ModalView from "../ModalView/ModalView";

function RegistrationModal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Sign Up</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <ModalView />
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationModal;
