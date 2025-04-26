import React, { useState } from "react";
import "./Header.css";
import header_logo from "./../images/header_logo.png";
import burger_open from "./../images/burgerMenu_open.svg";
import burger_close from "./../images/burgerMenu_close.svg";

const Header = () => {
  const menuItems = [
    "Startseite",
    "Dienstleistungen",
    "Preise",
    "Calculator",
    "Kontakte",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="wrap">
      <header>
        <div className="logo_wrap">
          <img alt="header-logo" src={header_logo} />
        </div>

        <div
          className={`burger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <img
            alt="menu-toggle"
            src={isMenuOpen ? burger_close : burger_open}
          />
        </div>

        <div className={`header-content ${isMenuOpen ? "open" : ""}`}>
          <div className="navbar">
            <ul className="menu">
              {menuItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`menu-item ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="blue-text">{item}</span>

                    {activeIndex === index && <div className="dot" />}
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="btn btn-header">Jetzt bestellen</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
