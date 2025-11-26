import './Header.css';

import logo from '../../assets/logo_SO_HAM.webp';

import { useState, useCallback } from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(o => !o), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  return (
    <header className="header">
      <img src={logo} alt="Maison So'Ham Logo" className="header-logo" />

      <button
        type="button"
        className="menu-trigger"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-controls="primary-nav"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <i className={`fa-solid fa-bars ${isOpen ? "rotated" : ""}`} />
      </button>

      <nav
        id="primary-nav"
        className={`nav ${isOpen ? "open" : ""}`}
        aria-label="Navigation principale"
      >
        <NavLink to="/" end className={({ isActive }) => `header-link titleh2mobile ${isActive ? "active" : ""}`} onClick={closeMenu}>
          Accueil
        </NavLink>
        <NavLink to="/medecouvrir" className={({ isActive }) => `header-link titleh2mobile ${isActive ? "active" : ""}`} onClick={closeMenu}>
          Me découvrir
        </NavLink>
        <NavLink to="/newsletter" className={({ isActive }) => `header-link titleh2mobile ${isActive ? "active" : ""}`} onClick={closeMenu}>
          News Letter
        </NavLink>
        <NavLink to="/prestations" className={({ isActive }) => `header-link titleh2mobile ${isActive ? "active" : ""}`} onClick={closeMenu}>
          Prestations
        </NavLink>
        <NavLink to="/tarifs" className={({ isActive }) => `header-link titleh2mobile ${isActive ? "active" : ""}`} onClick={closeMenu}>
          Tarifs
        </NavLink>
      </nav>
    </header>
  );
}

