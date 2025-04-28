import React, { useEffect, useState } from "react";
import "./Calculator.css";
import clock_logo from "./../../components/images/clock_logo.svg";
import money_logo from "./../../components/images/money_logo.svg";
import privacy_logo from "./../../components/images/privacy_logo.svg";

const serviceChoose = [
  "Routinereinigung",
  "Allgemeine Reinigung",
  "Reinigung nach Renovierung",
  "Reinigung vor der Übergabe",
  "Trockenreinigung",
  "Entfernung Reinigung",
];

const addictionalServices = [
  {
    title: "Sofa-Reinigung",
    subtitle: "Sofa",
  },
  {
    title: "Stuhlreinigung",
    subtitle: "Stuhl",
  },
  {
    title: "Reinigung der Matratze",
    subtitle: "Matratze",
  },
  {
    title: "Reinigung von Vorhängen",
    subtitle: "Vorhang",
  },
  {
    title: "Reinigung von Stofftieren",
    subtitle: "Stofftier",
  },
  {
    title: "Reinigung von Teppichen",
    subtitle: "Teppich",
  },
  {
    title: "Reinigung des Kissens",
    subtitle: "Kopfkissen",
  },
  {
    title: "Reinigung des Gummituchs",
    subtitle: "Decke",
  },
];

const roomOptions = [1, 2, 3, 4, "mehr"];
const bathroomOptions = [1, 2, 3, 4, "mehr"];
const storageOptions = [0, 1, 2, 3, "mehr"];

const contactsOptions = [
  {
    title: "Vor- und Nachname",
    placeholder: "Geben Sie Ihre E-Mail Adresse ein",
  },
  { title: "Rufnummer", placeholder: "Vorname Nachname" },
  { title: "E-Mail Adresse ", placeholder: "Ihren Telefonnummer eingeben" },
  { title: "Adresse", placeholder: "Geben Sie Ihre Adresse ein" },
];

const Calculator = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [bathroomsCount, setBathroomsCount] = useState(1);
  const [storageRoomsCount, setStorageRoomsCount] = useState(0);
  const [addictionalServicesPrice, setAddictionalServicesPrice] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState("");

  useEffect(() => {
    let basePrice = 500;
    let baseTime = 5;

    if (roomsCount === "mehr") {
      basePrice += 500;
      baseTime += 5;
    } else {
      basePrice += roomsCount * 200;
      baseTime += roomsCount * 2;
    }

    if (bathroomsCount === "mehr") {
      basePrice += 300;
      baseTime += 2;
    } else if (bathroomsCount > 1) {
      basePrice += (bathroomsCount - 1) * 100;
      baseTime += (bathroomsCount - 1) * 1;
    }

    if (storageRoomsCount === "mehr") {
      basePrice += 300;
      baseTime += 2;
    } else if (storageRoomsCount > 0) {
      basePrice += storageRoomsCount * 100;
      baseTime += storageRoomsCount * 1;
    }

    basePrice += addictionalServicesPrice;

    const priceFrom = basePrice;
    const priceTo = basePrice + 500;

    const timeFrom = baseTime;
    const timeTo = baseTime + 4;

    setEstimatedPrice(`${priceFrom} - ${priceTo} CHF`);
    setEstimatedTime(`${timeFrom} - ${timeTo} std.`);
  }, [roomsCount, bathroomsCount, storageRoomsCount, addictionalServicesPrice]);

  return (
    <div>
      <div className="calculator-title-wrap">
        <h2 className="blue-text">Preis kalkulieren</h2>
        <span className="blue-text">
          Finden Sie heraus, wie viel Ihre Reinigung kostet – einfach und
          übersichtlich.
        </span>
      </div>

      <div className="calculator-top-wrap">
        <div className="calculator-service-input">
          <h3 className="blue-text">Wählen Sie einen Dienst</h3>

          <div className="services-wrapper">
            {serviceChoose.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`service-item blue-text ${
                    selectedService === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  {service}
                </div>
              );
            })}
          </div>

          <div className="services-room-nums">
            <div className="room-block blue-text">
              <h4>Anzahl der Zimmer</h4>
              <div className="options-wrapper">
                {roomOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`option-item ${
                      roomsCount === option ? "active" : ""
                    }`}
                    onClick={() => setRoomsCount(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            <div className="room-block blue-text">
              <h4>Anzahl der Abstellräume</h4>

              <div className="room-block-wrap">
                <div className="options-wrapper">
                  {storageOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`option-item ${
                        storageRoomsCount === option ? "active" : ""
                      }`}
                      onClick={() => setStorageRoomsCount(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <span className="small-text">
                  (Für 1 Lagerplatz ab 100 CHF)
                </span>
              </div>
            </div>

            <div className="room-block blue-text">
              <h4>Anzahl der Bäder</h4>
              <div className="room-block-wrap">
                <div className="options-wrapper">
                  {bathroomOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`option-item ${
                        bathroomsCount === option ? "active" : ""
                      }`}
                      onClick={() => setBathroomsCount(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <span className="small-text">
                  (1 inklusive, jede weitere ab 100 CHF)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="calculator-result-box blue-text">
          <h4>Ungefähre Zeit</h4>
          <div className="res-block">
            <img alt="time" src={clock_logo} />
            <span>{estimatedTime}</span>
          </div>
          <h4>Geschätzter Preis</h4>
          <div className="res-block">
            <img alt="price" src={money_logo} />
            <span>{estimatedPrice}</span>
          </div>

          <button className="btn result-btn">Jetzt bestellen</button>
        </div>
      </div>

      <div className="calculator-bottom-wrap">
        <div className="calculator-checkbox-input blue-text">
          <h4>Zusätzliche Dienstleistungen</h4>

          <div className="checkbox-wrapper">
            {addictionalServices.map((service, index) => {
              const checkboxID = `addictional-service-${index}`;

              return (
                <div key={index} className="checkbox-item">
                  <input
                    id={checkboxID}
                    name={checkboxID}
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAddictionalServicesPrice((prev) => prev + 5);
                      } else {
                        setAddictionalServicesPrice((prev) => prev - 5);
                      }
                    }}
                  />
                  <label
                    htmlFor={checkboxID}
                  >{`${service.title} (für 1 ${service.subtitle} ab 5 CHF)`}</label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="calculator-contact-input blue-text">
          <h4>Kontaktinformationen</h4>

          <div className="contact-input-wrap">
            <div className="contact-wrapper">
              {contactsOptions.map((contact, index) => {
                return (
                  <div key={index} className="contact-item">
                    <span>{contact.title}</span>
                    <input type="text" placeholder={contact.placeholder} />
                  </div>
                );
              })}
            </div>

            <div className="privacy-link">
              <img alt="privacy" src={privacy_logo} />
              <a>Privatsphäre und Politik</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
