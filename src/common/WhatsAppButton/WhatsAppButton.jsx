import { BsWhatsapp } from "react-icons/bs";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phone = "5511961640586";
  const message = "Olá, vim pelo seu site e gostaria de falar com a Eduarda.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fixo"
      aria-label="Falar no WhatsApp"
    >
      <BsWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;
