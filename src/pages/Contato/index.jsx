import { useState } from "react";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import "./Contato.css";
import heroImg from "./images/foto-1.png";
import WhatsAppButton from "../../common/WhatsAppButton/WhatsAppButton.jsx";

export default function Contato() {
  const [step, setStep] = useState(1);
  const handleVoltar = () => {
    if (step === 2) {
      setAmbienteSelecionado("");
    }

    if (step === 3) {
      setReformasSelecionadas([]);
    }

    if (step === 4) {
      setStatusSelecionado("");
    }

    if (step === 5) {
      setUrgenciaSelecionada("");
    }

    setStep(step - 1);
  };


  const ambientes = [
    "Sala de estar",
    "Cozinha",
    "Quarto",
    "Planta completa",
    "Outro →",
  ];

  const reformas = [
    "Troca de revestimento",
    "Alterar a iluminação",
    "Rebaixo do teto em gesso",
    "Alterar pontos elétricos",
    "Marmoraria",
    "Marcenaria",
    "Reforma completa",
  ];

  const statusObra = [
    "Moro no local e quero reformar",
    "Não moro no local mas tenho acesso",
  ];

  const urgencia = [
    "Tenho urgência para iniciar a obra",
    "Não tenho urgência para iniciar a obra",
  ];

  const [ambienteSelecionado, setAmbienteSelecionado] = useState("");
  const [reformasSelecionadas, setReformasSelecionadas] = useState([]);
  const [statusSelecionado, setStatusSelecionado] = useState("");
  const [urgenciaSelecionada, setUrgenciaSelecionada] = useState("");

  const toggleReforma = (item) => {
    setReformasSelecionadas((prev) =>
      prev.includes(item)
        ? prev.filter((r) => r !== item)
        : [...prev, item]
    );
  };

  const enviarWhatsApp = () => {
    const numero = "5511961640586";

    const mensagem = `
*Olá Eduarda*

Contato pelo site EmInteriores.com.br

*Ambiente:* ${ambienteSelecionado}
*Reformas:* ${reformasSelecionadas.join(", ")}
*Status:* ${statusSelecionado}
*Urgência:* ${urgenciaSelecionada}
    `;

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  };

  return (
    <section className="contato-section">
      <h1 className="titulo-contato">Vamos conversar</h1>

      <div className="contato-container">
        <div className="contato-left">

          {/* VOLTAR */}
          {step > 1 && (
            <button className="btn-voltar" onClick={handleVoltar}>
              <FaArrowLeft /> Voltar
            </button>

          )}

          {/* ETAPA 1 */}
          {step === 1 && (
            <div className="card-contato">
              <h2>Qual ambiente você quer projetar?</h2>

              <div className="buttons-ambientes">
                {ambientes.map((item) => (
                  <button
                    key={item}
                    className={`btn-ambiente ${ambienteSelecionado === item ? "ativo" : ""}`}
                    onClick={() => {
                      setAmbienteSelecionado(item);
                      setStep(2);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ETAPA 2 */}
          {step === 2 && (
            <div className="card-contato">
              <h2>O que você pensa em reformar?</h2>

              {reformas.map((item) => (
                <label key={item} className="checkbox-line">
                  <input
                    type="checkbox"
                    checked={reformasSelecionadas.includes(item)}
                    onChange={() => toggleReforma(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}

              <button
                className="btn-avancar"
                disabled={reformasSelecionadas.length === 0}
                onClick={() => setStep(3)}
              >
                Continuar
              </button>
            </div>
          )}

          {/* ETAPA 3 */}
          {step === 3 && (
            <div className="card-contato">
              <h2>Qual o status da obra?</h2>

              {statusObra.map((item) => (
                <label key={item} className="checkbox-line">
                  <input
                    type="radio"
                    name="status"
                    checked={statusSelecionado === item}
                    onChange={() => setStatusSelecionado(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}

              <button
                className="btn-avancar"
                disabled={!statusSelecionado}
                onClick={() => setStep(4)}
              >
                Continuar
              </button>
            </div>
          )}


          {/* ETAPA 4 */}
          {step === 4 && (
            <div className="card-contato">
              <h2>Qual a sua urgência?</h2>

              {urgencia.map((item) => (
                <label key={item} className="checkbox-line">
                  <input
                    type="radio"
                    name="urgencia"
                    checked={urgenciaSelecionada === item}
                    onChange={() => setUrgenciaSelecionada(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}

              <button
                className="btn-avancar"
                disabled={!urgenciaSelecionada}
                onClick={() => setStep(5)}
              >
                Continuar
              </button>
            </div>
          )}


          {/* ETAPA 5 */}
          {step === 5 && (
            <div className="card-contato">
              <h2>Pronto! Vamos enviar?</h2>

              <ul className="resumo">
                <li><strong>Ambiente:</strong> {ambienteSelecionado}</li>
                <li><strong>Reformas:</strong> {reformasSelecionadas.join(", ")}</li>
                <li><strong>Status:</strong> {statusSelecionado}</li>
                <li><strong>Urgência:</strong> {urgenciaSelecionada}</li>
              </ul>

              <button className="btn-whatsapp" onClick={enviarWhatsApp}>
                <FaWhatsapp size={22} />
                Enviar pelo WhatsApp
              </button>
            </div>
          )}
        </div>

        <div className="contato-right">
          <img src={heroImg} alt="Foto" className="contato-foto" />
        </div>
      </div>

      <WhatsAppButton />
    </section>
  );
}
