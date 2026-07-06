import { useEffect, useState } from "react";
import Slider from "react-slick";
import GLightbox from "glightbox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "glightbox/dist/css/glightbox.css";

import "./Portfolio.css";

import sala1 from "./images/sala/areasocial1.png";
import sala2 from "./images/sala/areasocial2.png";
import sala3 from "./images/sala/areasocial3.png";
import sala4 from "./images/sala/areasocial4.png";
import sala5 from "./images/sala/areasocial5.png";
import sala6 from "./images/sala/areasocial6.png";
import sala7 from "./images/sala/areasocial7.png";

import banheiro1 from "./images/banheiro/banheiro1.png";
import banheiro2 from "./images/banheiro/banheiro2.png";
import banheiro3 from "./images/banheiro/banheiro3.png";
import banheiro4 from "./images/banheiro/banheiro4.png";
import banheiro5 from "./images/banheiro/banheiro5.png";

import quarto1 from "./images/quarto/quarto1.png";
import quarto2 from "./images/quarto/quarto2.png";
import quarto3 from "./images/quarto/quarto3.png";

import varanda1 from "./images/varanda/varanda1.png";
import varanda2 from "./images/varanda/varanda2.png";
import varanda3 from "./images/varanda/varanda3.png";



const Gallery = ({ title }) => {
  const ambientes = {
    Sala: [
      sala1,
      sala2,
      sala3,
      sala4,
      sala5,
      sala6,
      sala7,
    ],
    Banheiro: [
      banheiro1,
      banheiro2,
      banheiro3,
      banheiro4,
      banheiro5,

    ],
    Quarto: [
      quarto1,
      quarto2,
      quarto3,
    ],
    Varanda: [
      varanda1,
      varanda2,
      varanda3,
    ],


  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
const getSlidesToShow = () => {
  if (windowWidth < 600) return 1;
  if (windowWidth < 1024) return 2;
  return 3;
};

  const ambientesKeys = Object.keys(ambientes);
  const [ambienteAtivo, setAmbienteAtivo] = useState(ambientesKeys[0]);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => lightbox.destroy();
  }, [ambienteAtivo]);

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: getSlidesToShow(),
  slidesToScroll: 1,
  arrows: true,
};



  return (
    <section className="portfolio-gallery">
      <h2 className="gallery-title">{title}</h2>

      {/* BOTÕES DE AMBIENTES */}
      <div className="ambientes-buttons">
        {ambientesKeys.map((ambiente) => (
          <button
            key={ambiente}
            className={`ambiente-btn ${ambienteAtivo === ambiente ? "ativo" : ""
              }`}
            onClick={() => setAmbienteAtivo(ambiente)}
          >
            {ambiente}
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <Slider key={windowWidth} className="portfolio-slider" {...settings}>
        {ambientes[ambienteAtivo].map((img, index) => (
          <div key={index} className="portfolio-card">
            <a href={img} className="glightbox">
              <img
                src={img}
                alt={`${ambienteAtivo} ${index + 1}`}
              />
            </a>
          </div>

        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
