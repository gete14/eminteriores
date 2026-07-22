import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "./ComoFunciona.css";

import foto1 from "./images/foto1.png";
import foto2 from "./images/foto2.png";
import foto3 from "./images/foto3.png";
import foto4 from "./images/foto4.png";
import foto5 from "./images/foto5.png";
import foto6 from "./images/foto6.png";
import foto8 from "./images/foto8.png";
import foto9 from "./images/foto9.png";

const steps = [
  { img: foto1, titulo: "Primeiro Contato", descricao: "Você fala comigo sobre seu projeto, suas necessidades e estilo de vida. Vamos nos conhecer melhor!" },
  { img: foto2, titulo: "Levantamento", descricao: "Entendo o seu espaço, faço as medições e coleto todas as informações necessárias." },
  { img: foto3, titulo: "Estudo do Projeto", descricao: "Desenvolvo a proposta inicial com layout, conceito e soluções personalizadas." },
  { img: foto4, titulo: "Apresentação", descricao: "Apresento o projeto com imagens 3D, materiais e cada detalhe pensado para você." },
  { img: foto5, titulo: "Aprovação", descricao: "Ajustamos juntos o projeto até que tudo fique perfeito para você." },
  { img: foto6, titulo: "Detalhamento", descricao: "Produzo todos os documentos técnicos, listas de compra e orientações." },
  { img: foto8, titulo: "Execução", descricao: "Acompanhamento da execução para garantir que tudo saia conforme o planejado." },
  { img: foto9, titulo: "Entrega", descricao: "Seu ambiente pronto, funcional e cheio de personalidade para você viver e aproveitar!" },
];

export default function ContainerPassos() {
  const [current, setCurrent] = useState(0);

  const go = (index) => setCurrent(index);
  const prev = () => setCurrent(s => Math.max(0, s - 1));
  const next = () => setCurrent(s => Math.min(steps.length - 1, s + 1));

  const getClass = (index) => {
    const diff = index - current;
    if (diff === 0) return "pfc ativo";
    if (diff === -1) return "pfc adj esq";
    if (diff === 1) return "pfc adj dir";
    return "pfc oculto";
  };

  const getStyle = (index) => {
    const diff = index - current;
    if (Math.abs(diff) > 1) {
      return { transform: `translateX(${diff > 0 ? "130%" : "-130%"}) scale(0.4)` };
    }
    return {};
  };

  return (
    <section className="passos-section">

      <div className="passos-stage">

        {steps.map((step, index) => (
          <div
            key={index}
            className={getClass(index)}
            style={getStyle(index)}
            onClick={() => index !== current && go(index)}
          >
            <div className="pfc-badge">{String(index + 1).padStart(2, "0")}</div>
            <div className="pfc-img-wrapper">
              <img src={step.img} alt={step.titulo} className="pfc-img" />
            </div>
            <h3 className="pfc-titulo">{step.titulo}</h3>
            <p className="pfc-desc">{step.descricao}</p>
          </div>
        ))}

        <button className="passo-seta passo-seta-esq" onClick={prev} disabled={current === 0}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button className="passo-seta passo-seta-dir" onClick={next} disabled={current === steps.length - 1}>
          <MdOutlineKeyboardArrowRight />
        </button>

      </div>

      <div className="passos-dots">
        {steps.map((_, i) => (
          <button
            key={i}
            className={`passo-dot ${i === current ? "ativo" : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

    </section>
  );
}
