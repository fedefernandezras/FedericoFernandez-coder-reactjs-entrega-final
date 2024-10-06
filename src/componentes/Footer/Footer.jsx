import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MascotaPlus©. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li>
            <a href="/">Sobre nosotros</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
          <li>
            <a href="/">Política de privacidad</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
