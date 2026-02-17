// src/components/ui/Card.jsx

import React from "react";
import "../../assets/styles/card.css";

const Card = ({ children, className = "" }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
