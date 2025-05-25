import React from "react";
import footer_logo from "./../../components/images/header_logo.png";
import mark_logo from "./../../components/images/mark_logo.svg";
import mail_logo from "./../../components/images/mail_logo.svg";
import phone_logo from "./../../components/images/phone_logo.svg";
import "./Footer.css";

const Footer = () => {
  const contactData = [
    { img: phone_logo, text: "+41 79 123 45 67" },
    { img: mail_logo, text: "PremReno@gmail.com" },
    { img: mark_logo, text: "Bahnhofstrasse 10, Zürich" },
  ];

  return (
    <footer>
      <div className="wrap">
        <div className="footer-main-wrap">
          <div className="footer-left">
            <h4>Unsere Mission</h4>
            <span>
              Unsere Mission ist es, Sauberkeit, Komfort und Bequemlichkeit in
              jedes Zuhause und Büro zu bringen. Wir schaffen makellose Räume
              zum Leben und Arbeiten, indem wir professionelle
              Reinigungsdienste, Umzugshilfe und hochwertige Handwerksleistungen
              anbieten.
            </span>
          </div>

          <div className="footer-middle">
            <img alt="footer-img" src={footer_logo} />
          </div>

          <div className="footer-right">
            {contactData.map((data, index) => {
              return (
                <div key={index} className="contact-data">
                  <img alt="icon" src={data.img} />
                  <span>{data.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer-end-wrap">
          <span>2025 ©Premium Renovations, All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
