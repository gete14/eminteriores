import "./Portfolio.css";

import HeroImg from "./images/heroportfolio.png";


const HeroPortfolio = () => {
  
  return (
   <section className="heroPortfolio">
         <div className="heroPortfolio__content">
           <h1>NOSSO TOUR<br/>Online</h1>
   
           <p>
             Conheça alguns ambientes que transformamos com sofisticação, funcionalidade e atenção a cada detalhe.
           </p>
           
         </div>
   
         <div className="heroPortfolio__image">
           <img src={HeroImg} alt="" />
         </div>
       </section>
  );
};

export default HeroPortfolio;
