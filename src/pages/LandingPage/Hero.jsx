import "./LandingPage.css";
import heroImg from "./images/foto-1.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" role="img" aria-label="Foto da designer com tablet">
      <img src={heroImg} alt="Designer com tablet segurando equipamento" className="hero-img" />

      <div className="hero-overlay">
        <div className="hero-card">
          
          <h1 className="hero-title">Seu lar, um reflexo<br/>do seu viver!</h1>
          <Link to='/como-funciona' className="hero-cta">Conheça nosso trabalho</Link>
        </div>
      </div>
    </section>
  );
}
