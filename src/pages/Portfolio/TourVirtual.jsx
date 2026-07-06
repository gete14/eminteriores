import { useState } from "react";
import "./Portfolio.css";

import imagem1 from "./images/tour-virtual/image1.png";
import imagem2 from "./images/tour-virtual/image2.png";
import imagem3 from "./images/tour-virtual/image3.png";
import imagem4 from "./images/tour-virtual/image4.png";
import imagem5 from "./images/tour-virtual/image5.png";
import imagem6 from "./images/tour-virtual/image6.png";
import imagem7 from "./images/tour-virtual/image7.png";
import imagem8 from "./images/tour-virtual/image8.png";
import imagem9 from "./images/tour-virtual/image9.png";
import imagem10 from "./images/tour-virtual/image10.png";
import imagem11 from "./images/tour-virtual/image11.png";
import imagem12 from "./images/tour-virtual/image12.png";

const tours = [
  { id: 12, cliente: "Apto Varanda", imagem: imagem12, link: "https://meutour360.com/tour-360/apartamento-varanda" },
  { id: 1, cliente: "Apto 223", imagem: imagem1, link: "https://tour.meupasseiovirtual.com/view/4NQ91zLqbCL" },
  { id: 2, cliente: "Apto 231", imagem: imagem2, link: "https://tour.meupasseiovirtual.com/view/abi5ok3TVGp" },
  { id: 3, cliente: "Apto G&M", imagem: imagem3, link: "https://tour.meupasseiovirtual.com/view/bmwpLvyyAU1" },
  { id: 4, cliente: "Casa J&G", imagem: imagem4, link: "https://tour.meupasseiovirtual.com/view/wDYnWVZl7uy" },
  { id: 5, cliente: "Marcenaria JM Móveis", imagem: imagem5, link: "https://tour.meupasseiovirtual.com/view/QBFaiUyJo50" },
  { id: 6, cliente: "Apto 182", imagem: imagem6, link: "https://tour.meupasseiovirtual.com/view/0TnJmnHfmUS" },
  { id: 7, cliente: "Apto 91", imagem: imagem7, link: "https://tour.meupasseiovirtual.com/view/wDITc9bGCAZ" },
  { id: 8, cliente: "Apto 406", imagem: imagem8, link: "https://tour.meupasseiovirtual.com/view/Apr7KZUulJi" },
  { id: 9, cliente: "Apto 86B", imagem: imagem9, link: "https://tour.meupasseiovirtual.com/view/1gPlvbAoihb" },
  { id: 10, cliente: "Apto 34", imagem: imagem10, link: "https://tour.meupasseiovirtual.com/view/SfruCn5manb" },
  { id: 11, cliente: "Apto 91-2", imagem: imagem11, link: "https://tour.meupasseiovirtual.com/view/aQ4i0UiiBrm" },
];

export default function TourVirtual() {
  const [imagemAtiva, setImagemAtiva] = useState(null);

  return (
    <>
      <section className="tour-section">
        <h2 className="tour-title">Tours Virtuais</h2>

        <div className="tour-carousel">
          {tours.map((tour) => (
            <div className="tour-card" key={tour.id}>
              <img
                src={tour.imagem}
                className="tour-image"
                alt={tour.cliente}
                onClick={() => setImagemAtiva(tour.imagem)}
              />

              <div className="tour-content">
                <p>
                  Cliente:
                  <br />
                  {tour.cliente}
                </p>

                <a
                  href={tour.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tour-button"
                >
                  Acessar Tour
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {imagemAtiva && (
        <div className="tour-modal" onClick={() => setImagemAtiva(null)}>
          <button
            className="tour-modal-close"
            onClick={() => setImagemAtiva(null)}
          >
            ✕
          </button>

          <img
            src={imagemAtiva}
            className="tour-modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
