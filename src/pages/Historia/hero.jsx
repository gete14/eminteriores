import "./comecou";
import heroImg from "./images/historia-hero.png";

export default function Hero() {
  return (
    <section className="heroHistoria">
      <div className="heroHistoria__content">
        <span>SOBRE A EM INTERIORES</span>

        <h1>NOSSA HISTÓRIA</h1>

        <p>
          Cada ambiente que criamos carrega mais que elegância e
          funcionalidade, carrega propósito, cuidado e histórias que
          merecem ser vividas.
        </p>

        <p>Conheça a trajetória da EM Interiores</p>
      </div>

      <div className="heroHistoria__image">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}