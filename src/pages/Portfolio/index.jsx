import "./Portfolio.css";
import Gallery from "./Gallery.jsx";
import TourVirtual from "./TourVirtual.jsx";
import WhatsAppButton from "../../common/WhatsAppButton/WhatsAppButton.jsx";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfólio</h1>
      <Gallery />
      <TourVirtual />
      <WhatsAppButton />
    </div>
  );
}
