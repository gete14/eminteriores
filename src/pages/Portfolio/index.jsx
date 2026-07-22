import "./Portfolio.css";
// import Gallery from "./Gallery.jsx";
import HeroPortfolio from "./HeroPortfolio.jsx";
import TourVirtual from "./TourVirtual.jsx";
import WhatsAppButton from "../../common/WhatsAppButton/WhatsAppButton.jsx";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <HeroPortfolio />
      <TourVirtual />
      <WhatsAppButton />
    </div>
  );
}
