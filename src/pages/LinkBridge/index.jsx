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
  const message = "Olá Eduarda, vim pelo seu site e gostaria de mais informações!";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section
      className="linkbridge"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay" />

      <div className="content">

        {/* LOGO */}
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>

        {/* TEXTO */}
        <div className="header-text">
          <h1>EDUARDA </h1>
          <h1> SILVA</h1>
          <h2>DESIGN DE</h2>
          <h2>INTERIORES</h2>
        </div>

        {/* BOTÃO PRINCIPAL */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn primary"
        >
          <FaWhatsapp />
          <div className="btn-text">
            <span>WhatsApp</span>
            <small>Solicitar orçamento</small>
          </div>
        </a>

        {/* BOTÕES SECUNDÁRIOS */}
        <div className="secondary-links">
          <Link to="/portfolio" className="link-btn outline">
            <FaBriefcase /> Portfólio
          </Link>

          <a
            href="https://instagram.com/e.m.interiores"
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn outline"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <span>VAMOS TRANSFORMAR</span>
          <span>SEU AMBIENTE?</span>
          <div className="footer-line"></div>
        </div>

      </div>
    </section>
  );
}