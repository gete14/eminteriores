import { useState } from "react";
import "./LandingPage.css";
import { ChevronDown } from "lucide-react";
import PencilIcon from "./images/BsFillPenFill.svg";
import ShieldIcon from "./images/IoShield.svg";
import HouseIcon from "./images/BsFillHouseFill.svg";
import MoneyIcon from "./images/MdAttachMoney.svg";
import { useReveal } from "../../common/useReveal.js";

export default function Diferenciais() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, visible] = useReveal();

  const items = [
    {
      icon: PencilIcon,
      title: "Colocar no papel o seu sonho",
      text: "Transformo suas ideias em um projeto real, pensado para refletir o seu estilo e necessidades.",
    },
    {
      icon: ShieldIcon,
      title: "Evitar problemas e desperdícios",
      text: "Reduzo em até 90% os imprevistos da obra e evito compras desnecessárias.",
    },
    {
      icon: HouseIcon,
      title: "Visualizar seu imóvel em 3D",
      text: "Apresento o projeto com imagens realistas, para você enxergar o resultado antes de começar.",
    },
    {
      icon: MoneyIcon,
      title: "Realizar o projeto dentro do seu orçamento",
      text: "Planejo cada detalhe de acordo com a sua disponibilidade financeira, sem abrir mão da qualidade.",
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={ref} className={`dif-section${visible ? " visible" : ""}`}>
      <h2 className="dif-title">Nossos Diferenciais</h2>

      {/* DESKTOP / TABLET */}
      <div className="dif-grid dif-desktop">
        {items.map((item, index) => (
          <div key={index} className="dif-card">
            <div className="dif-icon">
              <img
                src={item.icon}
                alt={item.title}
              />
            </div>
            <h3 className="dif-card-title">{item.title}</h3>
            <p className="dif-card-text">{item.text}</p>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="dif-mobile">
        {items.map((item, index) => (
          <div
            key={index}
            className={`dif-mobile-item ${activeIndex === index ? "active" : ""
              }`}
            onClick={() => toggleItem(index)}
          >
            <div className="dif-mobile-header">
              <div className="dif-left">
                <div className="dif-icon">
                  <img
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
                <h3 className="dif-mobile-card-title">{item.title}</h3>
              </div>

              <ChevronDown
                className={`dif-arrow ${activeIndex === index ? "open" : ""}`}
                size={22}
              />
            </div>


            <div className="dif-mobile-content">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
