import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer(props) {
  return (
    <footer className="flex-row px-2 py-2 hbackground">
      <a
        href="https://www.linkedin.com/in/sallam-thabet-93418518a/"
        target="blank"
        rel="noopener noreferrer"
      >
        <li className="logo">
          <FaLinkedin />
        </li>
      </a>
      <a
        href="https://github.com/thabets"
        target="blank"
        rel="noopener noreferrer"
      >
        <li className="logo">
          <FaGithub />
        </li>
      </a>
      <a
        href="https://www.instagram.com/samsamosu/"
        target="blank"
        rel="noopener noreferrer"
      >
        <li className="logo">
          <FaInstagram />
        </li>
      </a>
      <p>Copyright © Sallam Thabet</p>
    </footer>
  );
}

export default Footer;
