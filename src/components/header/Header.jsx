import React, { useState } from "react";
import "./Header.css";
import header_logo from "./../images/header_logo.png";
import burger_open from "./../images/burgerMenu_open.svg";
import burger_close from "./../images/burgerMenu_close.svg";

const linksByPage = {
  main: [
    "Startseite",
    "Warum wir",
    "Dienstleistungen",
    "Bewertungen",
    "Kontakte",
  ],
  reinigung: [
    "Startseite",
    "Dienstleistungen",
    "Preise",
    "Calculator",
    "Kontakte",
  ],
  umzug: ["Startseite", "Dienstleistungen", "Preise", "Calculator", "Kontakte"],
  hausmeister: ["Startseite", "Preise", "Serviceauftrag", "Kontakte"],
};

const Header = ({ page }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = linksByPage[page] || [];

  const handleMenuItemClick = (item, index) => {
    setActiveIndex(index);
    setIsMenuOpen(false);

    const id = item;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="logo_wrap">
        <img alt="header-logo" src={header_logo} />
      </div>

      <div
        className={`burger-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img alt="menu-toggle" src={isMenuOpen ? burger_close : burger_open} />
      </div>

      <div className={`header-content ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar">
          <ul className="menu">
            {menuItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <li
                  key={index}
                  className={`menu-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick(item, index)}
                >
                  <span className="blue-text">{item}</span>
                  <div className={`dot ${isActive ? "visible" : ""}`} />
                </li>
              );
            })}
          </ul>
        </div>
        <button className="btn btn-header">Jetzt bestellen</button>
      </div>
    </header>
  );
};

export default Header;
