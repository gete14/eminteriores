import "./Historia.css";
import statusImg from "./images/statusImg.png";
import { useReveal } from "../../common/useReveal.js";

export default function Status() {
  const [ref, visible] = useReveal();

  const stats = [
    {
      number: "+130",
      text: "Projetos Desenvolvidos",
    },
    {
      number: "+200",
      text: "Clientes atendidos",
    },
    {
      number: "+300",
      text: "Ambientes transformados",
    },
    {
      number: "+300",
      text: "Projetos personalizados",
    },
  ];

  return (
    <section ref={ref} className={`status${visible ? " visible" : ""}`}>
      <div className="status__image">
        <img src={statusImg} alt="Status" />
      </div>

      <div className="status__content">
        <h2>
          CONSTRUINDO HISTÓRIAS
          <br />
          TODOS OS DIAS
        </h2>

        <div className="status__grid">
          {stats.map((item, index) => (
            <div className="status__item" key={index}>
              <h3>{item.number}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}