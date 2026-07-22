import "./LandingPage.css";
import heroImg from "./images/foto-hero-social.png";
import { Link } from "react-router-dom";
import { useReveal } from "../../common/useReveal.js";

export default function HeroSocial() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} className={`hero-social-section${visible ? " visible" : ""}`}>



      <div className="hero-social-content">
        <div className="container-quemsou">
          <p className="hero-social-subtitle">sobre nós</p>
          <h1
            className="hero-social-title"
          >
            design que reflete quem você é
          </h1>
          <p className="hero-social-text">
            A EM interiores acredita que cada ambiente conta uma história. Nosso trabalho é traduzir sonhos em espaços sofisticados, acolhedores e atemporais.
          </p>
        </div>
        <div className="hero-social-btns">
          <Link to='/portfolio' className="btn-gold">Nossa História</Link>
          <Link to='/como-funciona' className="btn-gold">Como Trabalho</Link>
        </div>
      </div>
      <div className="hero-social-image-wrapper">
        <img
          src={heroImg}
          alt="Foto da designer"
          className="hero-social-img"
        />
      </div>

    </section>
  );
}
