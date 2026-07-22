import { HashRouter, Routes, Route } from "react-router-dom";

import Footer from "./common/Footer/Footer.jsx";
import NavBar from "./common/NavBar/NavBar.jsx";
import ScrollToTop from "./common/ScrollToTop.jsx";

import LandingPage from "./pages/LandingPage/index.jsx";
import ComoFunciona from "./pages/ComoFunciona/index.jsx";
import Portfolio from "./pages/Portfolio/index.jsx";
import Contato from "./pages/Historia/index.jsx";

export default function App() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />

      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/historia" element={<Contato />} />

        {/* Página 404 */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
