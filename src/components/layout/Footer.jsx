import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <nav classname={styles.Footer - nav}>
        <div className="contact-info">
          <h2>contato</h2>
          <p>Email: weeat@gmail.com</p>
          <p>Telephone: (12) 1234-5678</p>
        </div>
        <div className="social-media">
          <h2>Redes Sociais</h2>
          <ul>
            <li>
              <a href="https://facebook.com"></a>Facebook
            </li>
            <li>
              <a href="https://twitter.com"></a>Twitter
            </li>
            <li>
              <a href="https://instagram.com"></a>Instagram
            </li>
          </ul>
        </div>
        <div className="location">
          <h2>Local</h2>
          <p>Endereço: Rua xxx, 123 - Sjc, Sp - CEP: 12345-678 </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
