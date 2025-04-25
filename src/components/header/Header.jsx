import React, { useState } from "react";
import "./Header.css";
import header_logo from "./../images/header_logo.png";

const Header = () => {
  const menuItems = [
    "Startseite",
    "Dienstleistungen",
    "Preise",
    "Calculator",
    "Kontakte",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header>
      <div className="logo_wrap">
        <img alt="header-logo" src={header_logo} />
      </div>
      <div className="header-content">
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
  );
};

export default Header;
