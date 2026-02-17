// src/components/ui/Card.jsx

import React from "react";
import "../../assets/styles/components/card.css";

const Card = ({ children, className = "" }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
