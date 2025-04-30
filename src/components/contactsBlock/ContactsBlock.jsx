import React from "react";
import "./ContactsBlock.css";
import privacy_logo from "./../../components/images/privacy_logo.svg";
import Hausmeisterservice_2 from "./../../components/images/Hausmeisterservice-2.svg";

const contactsOptions = [
  {
    title: "Vor- und Nachname",
    placeholder: "Geben Sie Ihre E-Mail Adresse ein",
  },
  { title: "Rufnummer", placeholder: "Vorname Nachname" },
  { title: "E-Mail Adresse ", placeholder: "Ihren Telefonnummer eingeben" },
  { title: "Adresse", placeholder: "Geben Sie Ihre Adresse ein" },
];

const ContactsBlock = () => {
  return (
    <div className="contacts-block-wrapper">
      <div className="contacts-input blue-text">
        <div className="contacts-title">
          <h4>Kontaktinformationen</h4>
          <span>Füllen Sie die Details aus, um den Dienst zu bestellen</span>
        </div>

        <div className="contacts-wrap">
          <div className="contacts-block">
            {contactsOptions.map((contact, index) => {
              return (
                <div key={index} className="contact-input-item">
                  <span>{contact.title}</span>
                  <input type="text" placeholder={contact.placeholder} />
                </div>
              );
            })}
          </div>

          <div className="privacy-link contact-privacy-link">
            <img alt="privacy" src={privacy_logo} />
            <a>Privatsphäre und Politik</a>
          </div>

          <button className="btn contact-btn">Jetzt bestellen</button>
        </div>
      </div>

      <div className="contacts-block-img">
        <img alt="contacts-logo" src={Hausmeisterservice_2} />
      </div>
    </div>
  );
};

export default ContactsBlock;
