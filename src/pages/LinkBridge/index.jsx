import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaGlobe,
  FaBriefcase,
  FaWpforms,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import heroImg from "./images/foto-1.png";
import logo from "../../assets/logos/logoBranca.png";

import "./LinkBridge.css";

export default function LinkBridge() {
  const phone = "5511961640586";
  const message = "Olá, vim pelo seu site e gostaria de mais informações!";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section
      className="linkbridge"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay" />

      <div className="content">



        <div className="header-text">
          <h1>EDUARDA</h1>
          <h2>EM INTERIORES</h2>
          <p>Soluções verdadeiras para a sua casa!</p>
        </div>

        <div className="main-links">
          <Link to='/home' className="link-btn"><FaGlobe />Site</Link>
          <Link to='/portfolio' className="link-btn"><FaBriefcase />Portfólio</Link>
          <Link to='/contato' className="link-btn"><FaWpforms />Formulário</Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>


          <div className="social-links">
            <a
              href="https://instagram.com/e.m.interiores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram">
              <FaInstagram />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@e.m.interiores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>


        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>

      </div>
    </section>
  );
}
