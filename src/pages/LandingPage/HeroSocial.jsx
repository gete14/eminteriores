import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import "./LandingPage.css";
import heroImg from "./images/foto-2.jpg";
import { Link } from "react-router-dom";

export default function HeroSocial() {
  return (
    <section className="hero-social-section">

      <div className="hero-social-image-wrapper">
        <img
          src={heroImg}
          alt="Foto da designer"
          className="hero-social-img"
        />
      </div>

      <div className="hero-social-content">
        <div className="container-quemsou">
          <p>Sou apaixonada por transformar ambientes em espaços que contam histórias. Desde as primeiras brincadeiras com Lego até os projetos atuais, a criatividade sempre fez parte da minha vida.<br></br><br></br>Busco unir sensibilidade, estudo e atenção aos detalhes para criar ambientes que realmente façam sentido para quem vai vivê-los.
            Explorar novos lugares, aprender sempre e estar com minha família (e meus pets!) me inspira diariamente.
            Independentemente do tamanho do projeto, meu objetivo é criar espaços acolhedores, funcionais e cheios de personalidade.
          </p>
        </div>
        <div className="hero-social-btns">
          <Link to='/portfolio' className="hero-social-btn">Portfolio</Link>
          <Link to='/como-funciona' className="hero-social-btn">Como Trabalhamos</Link>
        </div>

        <div className="hero-social-icons">
          <a
            href="https://www.instagram.com/e.m.interiores/"
            className="hero-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/5511961640586"
            className="hero-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.tiktok.com/@e.m.interiores"
            className="hero-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </div>


      </div>

    </section>
  );
}
