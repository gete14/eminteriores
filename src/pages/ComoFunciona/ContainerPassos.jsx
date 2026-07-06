import { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import {
    FaLightbulb,
    FaRuler,
    FaTools,
} from "react-icons/fa";
import { MdChecklist, MdVideoCameraBack, MdOutlineAddToDrive, MdOutlineSupportAgent } from "react-icons/md";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { BiCube } from "react-icons/bi";

import "./ComoFunciona.css";

import foto1 from "./images/foto1.png";
import foto2 from "./images/foto2.png";
import foto3 from "./images/foto3.png";
import foto4 from "./images/foto4.png";
import foto5 from "./images/foto5.png";
import foto6 from "./images/foto6.png";
import video from "./images/foto7(video).mp4";
import foto8 from "./images/foto8.png";
import foto9 from "./images/foto9.png";
import foto10 from "./images/foto10.png";

export default function ContainerPassos() {

    const icons = [
        <FaLightbulb className="icone" />,
        <MdChecklist className="icone" />,
        <FaRuler className="icone" />,
        <BiCube className="icone" />,
        <FaTools className="icone" />,
        <BsFillFileTextFill className="icone" />,
        <MdVideoCameraBack className="icone" />,
        <IoChatbubbles className="icone" />,
        <MdOutlineAddToDrive className="icone" />,
        <MdOutlineSupportAgent className="icone" />
    ];

    const steps = [
        { img: foto1, text: "Vou explicar a voces o processo de desenvolvimento dos nossos projetos de design de interiores!" },
        { img: foto2, text: "Minha parte começa assim que seu projeto arquitetônico estiver pronto.\n Vou precisar da planta com todas as medidas para começar!" },
        { img: foto3, text: "Eu simplifico toda a planta, mantendo apenas as paredes, janelas e portas. \n Dessa forma, já tenho uma base para fazer anotações durante a reunião de briefing." },
        { img: foto4, text: "Nessa reunião, vou compreender suas necessidades e elaborar um layout específico para o cotidiano da sua família..." },
        { img: foto5, text: "Agora, analiso todo o layout, buscando a melhor distribuição, sempre considerando a circulação e o aproveitamento do espaço." },
        { img: foto6, text: "Com o layout definido, iniciarei a modelagem e criarei as imagens renderizadas. \n Após revisão de tudo, farei a tão esperada reunião para apresentar o projeto." },
        { img: video, type: "video", text: "Além das imagens, crio um tour virtual para que o cliente possa ter uma melhor noção do ambiente." },
        { img: foto8, text: "Após a aprovação das imagens, avançamos para o detalhamento, onde cada aspecto é especificado com precisão. \n Isso permite que o cliente elabore o projeto de acordo com as imagens que visualizou." },
        { img: foto9, text: "Após concluir  o detalhamento, crio uma pasta no Drive na qual armazeno todos os arquivos, para que o cliente possa acessar os PDFs sempre que necessário. \n Isso facilita o envio para terceiros." },
        { img: foto10, text: "Essas são as etapas do projeto. \n Mesmo após a sua conclusão, permaneço em contato com o cliente para esclarecer possíveis dúvidas e auxiliar na reforma de forma online." },
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

    return (
        <section className="passos-section">

            {/* Indicadores */}
            <div className="passos-indicadores">
                {steps.map((_, index) => (
                    <button
                        key={index}
                        className={`passo-btn ${currentStep === index ? "ativo" : ""}`}
                        onClick={() => setCurrentStep(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* Conteúdo */}
            <div className="passos-conteudo">

                <button className="passo-seta esquerda" onClick={prevStep}>
                    <MdOutlineKeyboardArrowLeft className="arrow-icon" />
                </button>

                {/* AQUI: key e classe fade */}
                <div className="passo-card fade" key={currentStep}>

                    <div className="passo-imagem">
                        {steps[currentStep].type === "video" ? (
                            <video src={steps[currentStep].img} controls autoPlay muted />
                        ) : (
                            <img src={steps[currentStep].img} alt={`Passo ${currentStep + 1}`} />
                        )}
                    </div>

                    <div className="passo-info">
                        <div className="passo-icone">
                            {icons[currentStep]}
                        </div>
                        <p>{steps[currentStep].text}</p>
                    </div>
                </div>

                <button className="passo-seta direita" onClick={nextStep}>
                    <MdOutlineKeyboardArrowRight className="arrow-icon" />
                </button>

            </div>
        </section>
    );
}
