// src/components/common/EmptyState.jsx

import React from "react";
import Button from "../ui/Button";
import "../../assets/styles/components/emptyState.css";

const EmptyState = ({
  title = "No hay datos disponibles",
  description = "No se encontró información para mostrar.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{description}</p>

      {buttonText && (
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
