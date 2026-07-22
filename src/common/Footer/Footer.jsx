import "./Footer.css";
import logo from "../../assets/logos/logo-footer.svg";
import instagram from "../../assets/logos/BsInstagram.svg";
import whatsapp from "../../assets/logos/BsWhatsapp.svg";
import tiktok from "../../assets/logos/IoLogoTiktok.svg";

import { Link } from "react-router-dom";

export default function Footer() {

  const numeroWhatsapp = "5511961640586";
  const mensagem = "Olá, vim pelo seu site e gostaria de falar com a Eduarda.";
  const mensagemOrcamento = "Olá, quero realizar um orçamento com a Eduarda."

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="E.M Interiores" />
          </Link>
        </div>

        <div className="footer-column">
          <h3>Navegue pelo site</h3>

          <Link to="/portfolio">Portfólio</Link>

          <Link to="/historia">
            Nossa História
          </Link>

          <Link to="/como-funciona">
            Como Funciona
          </Link>

        </div>

        <div className="footer-column">
          <h3>Redes sociais</h3>

          <a
            href={`https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" className="footer-icon" />

            +55 11 96164-0586
          </a>

          <a
            href="https://www.instagram.com/e.m.interiores/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram" className="footer-icon" />

            @e.m.interiores
          </a>

          <a
            href="https://www.tiktok.com/@e.m.interiores"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktok} alt="TikTok" className="footer-icon" />

            @E.m.interiores
          </a>
        </div>

        <div className="footer-column">
          <h3>Atendo o Brasil todo!!</h3>

          <p>
            Venha fazer uma consulta comigo
            <br />
            e realizar seu sonho em realidade!!
          </p>

          <button
           onClick={() =>
          window.location.href = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagemOrcamento)}`}
          className="btn-gold"
          >
            FAÇA SEU ORÇAMENTO
          </button>
        </div>
      </div>

      <div className="footer-line-copyright"></div>

      <div className="footer-copyright">
        © 2026 – Eduarda Silva Prado. Todos os direitos reservados.
      </div>
    </footer>
  );
}