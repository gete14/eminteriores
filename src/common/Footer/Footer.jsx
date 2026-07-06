import "./Footer.css";
import logo from "../../assets/logos/logoBranca.png";
import { Link, useLocation } from "react-router-dom";

import { FaInstagram, FaWhatsapp, FaTiktok, FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
   if (location.pathname === "/") {
  return null;
}

  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LOGO */}
        <Link to='/'>
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        {/* BLOCOS: NAVEGAÇÃO + REDES */}
        <div className="footer-blocks">
          {/* NAVEGAÇÃO */}
          <div className="footer-section">
            <h3>Navegação</h3>
            <Link to='/' className="button-nav">Home</Link>
            <Link to='/como-funciona' className="button-nav">Como Funciona</Link>
            <Link to='/portfolio' className="button-nav">Portfólio</Link>
            <Link to='/contato' className="button-nav">Contato</Link>
          </div>

          {/* REDES SOCIAIS */}
          <div className="footer-section">
            <h3>Redes</h3>
            <div className="social-item">
              <a href="https://www.instagram.com/e.m.interiores/"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="icon" />
                Instagram
              </a>
            </div>

            <div className="social-item">
              <a href="https://wa.me/5511961640586"
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp className="icon" />
                WhatsApp
              </a>
            </div>

            <div className="social-item">
              <a href="https://www.tiktok.com/@e.m.interiores"
                target="_blank"
                rel="noopener noreferrer">
                <FaTiktok className="icon" />
                Tiktok
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* LINHA DE CIMA DO COPYRIGHT */}
      <div className="footer-bottom">
        <div className="copyright-left">
          <FaRegCopyright className="icon" />
          <p>2025 – Eduarda Silva Prado. Todos os direitos reservados.</p>
        </div>

        <a href="https://gustawebsites.com.br/"
         className="dev-by "
         target="_blank"
        rel="noopener noreferrer"
         >Desenvolvido por GustaWebsites</a>
      </div>
    </footer>
  );
}
