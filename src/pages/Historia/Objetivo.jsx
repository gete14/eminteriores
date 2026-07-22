import "./Historia.css";
import home from "./images/BiHomeHeart.svg";
import Stars from "./images/BsStars.svg";
import Users from "./images/HiUsers.svg";
import Diamond from "./images/IoDiamondSharp.svg";
import objetivoImg from "./images/objetivoImg.png";
import { useReveal } from "../../common/useReveal.js";

export default function Objetivo() {
  const [ref, visible] = useReveal();

  const cards = [
    {
      icon: <img src={home} alt="Home" />,
      title: "Criar espaços acolhedores",
      text: "Ambientes que transmitem conforto e bem estar",
    },
    {
      icon: <img src={Stars} alt="Stars" />,
      title: "Valorizar cada detalhe",
      text: "Do conceito à entrega, nada passa despercebido",
    },
    {
      icon: <img src={Users} alt="Users" />,
      title: "Construir relações de confiança",
      text: "Mais do que projetar, nós escutamos e transformamos",
    },
    {
      icon: <img src={Diamond} alt="Diamond" />,
      title: "Entregar excelência",
      text: "Qualidade e compromisso do início ao fim",
    },
  ];

  return (
    <section ref={ref} className={`objetivo${visible ? " visible" : ""}`}>
      <div className="objetivo__content">
        <span>MEU OBJETIVO</span>

        <h2>
          Criar ambientes que encantam
          <br />
          e transformam vidas.
        </h2>

        <p>
          Nosso compromisso é entregar projetos personalizados, que refletem a personalidade de cada cliente, respeitando suas necessidades, estilo de vida e orçamento.
        </p>

        <div className="objetivo__cards">
          {cards.map((item, index) => (
            <div className="objetivo__card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="objetivo__image">
        <img src={objetivoImg} alt="Objetivo" />
      </div>
    </section>
  );
}