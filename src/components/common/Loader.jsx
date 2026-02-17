// src/components/common/Loader.jsx

import React from "react";
import "../../assets/styles/components/loader.css";

const Loader = ({ text = "Cargando..." }) => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-text">{text}</p>
    </div>
  );
};

export default Loader;
