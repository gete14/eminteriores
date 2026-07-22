import { useEffect, useState, useRef } from "react";
import "./NavBar.css";
import logoSvg from "../../assets/logos/logo.svg";
import { Link, useLocation } from "react-router-dom";

// Ícones
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Detectar scroll e esconder header
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const isActive = (path) => location.pathname === path;


  return (
    <header className={showHeader ? "show" : "hide"}>
      <div className="header-content">

        <Link to='/'>
          <div className="logo-area">
            
            <img src={logoSvg} alt="Logo" className="logo" />
          </div>
        </Link>

        {/* Botão Mobile */}
        <button
          ref={buttonRef}
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

        {/* Menu */}
        <nav ref={menuRef} className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`button-nav ${isActive("/") ? "active" : ""}`}
          >
            Início
          </Link>

          <Link
            to="/como-funciona"
            className={`button-nav ${isActive("/como-funciona") ? "active" : ""}`}
          >
            Como Funciona
          </Link>

          <Link
            to="/portfolio"
            className={`button-nav ${isActive("/portfolio") ? "active" : ""}`}
          >
            Portfólio
          </Link>

          <Link
            to="/historia"
            className={`button-nav ${isActive("/historia") ? "active" : ""}`}
          >
            História
          </Link>
        </nav>
        <button
          onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.'}
          className="btn-gold"
        >
          Fale Comigo
        </button>

      </div>
    </header>
  );
}
