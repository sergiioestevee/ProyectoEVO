// src/components/layout/Footer.jsx

import React from "react";
import "../../assets/styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} EvoMarket B2B</p>
        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
