import React from "react";
import "./ModalView.css";
import RegistrationForm from "../RegistrationForm";
import MyIcon from "../Items//MyIcon.svg";

const ModalView = () => {
  return (
    <div className="modal-wrapper">
      <img className="img-main" src={MyIcon} alt="" />
      <RegistrationForm />
    </div>
  );
};

export default ModalView;
