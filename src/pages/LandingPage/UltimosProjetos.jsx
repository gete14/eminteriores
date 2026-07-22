import { useState } from "react";
import "./LandingPage.css";
import { useReveal } from "../../common/useReveal.js";

import imagem1 from "./images/image-ultimo-projeto-1.png";
import imagem2 from "./images/image-ultimo-projeto-2.png";
import imagem3 from "./images/image-ultimo-projeto-3.png";
import imagem4 from "./images/image-ultimo-projeto-4.png";

export default function UltimosProjetos() {
  const [imagemAberta, setImagemAberta] = useState(null);
  const [ref, visible] = useReveal();

  const imagens = [imagem1, imagem2, imagem3, imagem4];

  return (
    <section ref={ref} className={`ultimos-projetos-section${visible ? " visible" : ""}`}>
      <div className="container-ultimos-projetos">
        <h2 className="ultimos-projetos-title">Últimos Projetos</h2>

        <div className="projetos-grid">
          {imagens.map((img, index) => (
            <div
              key={index}
              className="projeto-card"
              onClick={() => setImagemAberta(img)}
            >
              <img src={img} alt={`Projeto ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="btn-gold">Ver Todos</button>

        {imagemAberta && (
          <div
            className="modal-overlay"
            onClick={() => setImagemAberta(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="fechar-modal"
                onClick={() => setImagemAberta(null)}
              >
                ✕
              </button>

              <img src={imagemAberta} alt="Projeto ampliado" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}