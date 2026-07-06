import { useEffect, useState, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/logos/logoAzul.png";
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
  if (location.pathname === "/") {
  return null;
}


  return (
    <header className={showHeader ? "show" : "hide"}>
      <div className="header-content">

        <Link to='/home'>
          <div className="logo-area">
            <img src={logo} alt="Logo" className="logo" />
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
          <Link to='/home' className="button-nav">Home</Link>
          <Link to='/como-funciona' className="button-nav">Como Funciona</Link>
          <Link to='/portfolio' className="button-nav">Portfólio</Link>
          <Link to='/contato' className="button-nav">Contato</Link>
        </nav>

      </div>
    </header>
  );
}
