import "./Historia.css";
import comecouImg from "./images/comecouImg.png";
import { useReveal } from "../../common/useReveal.js";

export default function Comecou() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} className={`comoComecou${visible ? " visible" : ""}`}>
      <div className="comoComecou__content">
        <span>COMO TUDO COMEÇOU</span>

        <h2>UMA PAIXÃO QUE VIROU PROPÓSITO</h2>

        <p>
          A EM Interiores nasceu da paixão por criar ambientes que unem
          beleza, funcionalidade e identidade.
        </p>

        <p>
          Desde o início, nosso objetivo sempre foi compreender
          profundamente cada cliente para transformar ideias em espaços
          únicos e acolhedores.
        </p>

        <p>
          Acreditamos que cada detalhe importa e que um ambiente bem
          planejado tem o poder de transformar a rotina e trazer mais
          qualidade de vida para as pessoas.
        </p>
      </div>

      <div className="comoComecou__image">
        <img src={comecouImg} alt="Como Tudo Começou" />
      </div>
    </section>
  );
}