import "./LandingPage.css";
import { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";

import pessoa from "./images/perfil.png";

import ambiente1 from "./images/ambiente-5.png";
import ambiente2 from "./images/ambiente-6.png";
import ambiente3 from "./images/ambiente-7.png";

export default function Hero() {
  const imagens = [
    ambiente1,
    ambiente2,
    ambiente3,
  ];

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  const nextSlide = () => {
    setPrev(current);
    setCurrent((current + 1) % imagens.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="hero" id="hero">
      {/* Fundo */}
      {imagens.map((img, index) => {
        let className = "hero-bg";

        if (index === current) {
          className += " active";
        } else if (index === prev) {
          className += " prev";
        }

        return (
          <div
            key={index}
            className={className}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        );
      })}

      {/* Pessoa fixa */}
      <img
        src={pessoa}
        alt="Designer"
        className="hero-person"
      />

      {/* Gradiente da pessoa */}
      <div className="hero-person-overlay"></div>

      {/* Seta */}
      <button
        className="hero-next"
        onClick={nextSlide}
      >
        <HiArrowRight />
      </button>

      {/* Indicadores */}
      <div className="hero-dots">
        {imagens.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${
              index === current ? "active" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
}