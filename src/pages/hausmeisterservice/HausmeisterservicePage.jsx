import React from "react";
import brush_logo from "./../../components/images/brush_logo.svg";
import chisel_logo from "./../../components/images/chisel_logo.svg";
import cupboard_logo from "./../../components/images/cupboard_logo.svg";
import drill_logo from "./../../components/images/drill_logo.svg";
import glue_logo from "./../../components/images/glue_logo.svg";
import hammer_logo from "./../../components/images/hammer_logo.svg";
import park_floor_logo from "./../../components/images/park_floor_logo.svg";
import pier_logo from "./../../components/images/pier_logo.svg";
import pipe_logo from "./../../components/images/pipe_logo.svg";
import tabler_paint_logo from "./../../components/images/tabler_paint_logo.svg";
import toolkit_logo from "./../../components/images/toolkit_logo.svg";
import wall_logo from "./../../components/images/wall_logo.svg";
import flowers_logo from "./../../components/images/flowers_logo.svg";
import Hausmeisterservice_1 from "./../../components/images/Hausmeisterservice_1.svg";
import Hausmeisterservice_2 from "./../../components/images/Hausmeisterservice-2.svg";
import house_chimney_logo from "./../../components/images/house_chimney_logo.svg";
import screwdriver_logo from "./../../components/images/screwdriver_logo.svg";
import shovel_logo from "./../../components/images/shovel_logo.svg";
import phone_logo from "./../../components/images/phone_logo.svg";
import mail_logo from "./../../components/images/mail_logo.svg";
import back_logo from "./../../components/images/back_logo.svg";
import "./HausmeisterservicePage.css";
import LogoWrapper from "../../components/logoWrapper/LogoWrapper";
import ServiceBlockV2 from "../../components/serviceBlockV2/ServiceBlockV2";
import ContactsBlock from "../../components/contactsBlock/ContactsBlock";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";

const servicesInfo = [
  {
    logo: wall_logo,
    title: "Einbau von Gipskartonwänden",
    description:
      "Wir montieren Gipskartonwände fachgerecht und präzise, um stabile, glatte und langlebige Raumtrennungen zu schaffen. Dabei sorgen wir für eine saubere und zuverlässige Umsetzung",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },

  {
    logo: hammer_logo,
    title: "Gipswand-Reparatur",
    description:
      "Wir reparieren Gipskartonwände fachgerecht und präzise, beseitigen Risse, Löcher und andere Schäden, sodass die gesamte Oberfläche wieder glatt, stabil und einwandfrei wird",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: brush_logo,
    title: "Außenanstrich",
    description:
      "Wir führen professionelle Außenanstriche durch, die Ihre Fassade vor Witterungseinflüssen schützen und ihr ein frisches, gepflegtes Aussehen verleihen, das lange Zeit erhalten bleibt",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: cupboard_logo,
    title: "Montage von Möbeln",
    description:
      "Wir übernehmen die fachgerechte Montage Ihrer Möbel, sorgen für eine stabile und sichere Zusammenstellung und stellen sicher, dass alles perfekt passt und funktionsfähig ist",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: park_floor_logo,
    title: "Montage von Fußböden",
    description:
      "Wir verlegen verschiedene Bodenbeläge fachgerecht, sorgen für eine gleichmäßige, stabile Oberfläche und garantieren eine langlebige, ästhetische sowie hochwertige Ausführung",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: tabler_paint_logo,
    title: "Innenanstrich",
    description:
      "Wir bieten professionelle Innenanstriche an, die Ihre Räume auffrischen und mit hochwertigen Farben für ein sauberes, modernes und einladendes Ambiente sorgen, das lange hält",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: glue_logo,
    title: "Restaurierung",
    description:
      "Wir bieten professionelle Restaurierung und Instandsetzung von beschädigten Oberflächen und Möbeln, um ihnen ihr ursprüngliches Aussehen und ihre Funktionalität zurückzugeben",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: toolkit_logo,
    title: "Bodenreparatur",
    description:
      "Wir reparieren beschädigte Böden, beseitigen Unebenheiten und sorgen für eine gleichmäßige, stabile Oberfläche, die sowohl langlebig, funktional als auch optisch ansprechend ist",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: pipe_logo,
    title: "Klempnerarbeiten Reparatur",
    description:
      "Wir reparieren Ihr Wasserleitungs- und Sanitärsystem, beheben Lecks, Störungen und Defekte und stellen sicher, dass alles wieder einwandfrei und zuverlässig funktioniert",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: chisel_logo,
    title: "Fliesenverlegung",
    description:
      "Wir verlegen Fliesen präzise und fachgerecht, sorgen für eine gleichmäßige Oberfläche und ein ästhetisch ansprechendes Ergebnis in Ihrem Badezimmer, Küche oder anderen Räumen",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: pier_logo,
    title: "Austausch von Fliesen",
    description:
      "Wir ersetzen beschädigte Fliesen schnell und professionell, sorgen für eine nahtlose Integration und stellen sicher, dass das Ergebnis optisch und funktional perfekt ist",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: drill_logo,
    title: "Maurerarbeiten",
    description:
      "Wir bieten professionelle Ausführung von Mauerarbeiten, erstellen stabile und langlebige Wände aus Ziegeln und sorgen für eine präzise und saubere Ausführung jedes Projekts",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: wall_logo,
    title: "Gartenbau",
    description:
      "Wir bieten umfassende Gartendienstleistungen, von der Pflanzenpflege bis hin zur Landschaftsgestaltung, um Ihren Garten gepflegt und schön zu gestalten",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: shovel_logo,
    title: "Gartenpflege",
    description:
      "Wir bieten umfassende Gartendienstleistungen, von der Pflanzenpflege bis hin zur Landschaftsgestaltung, um Ihren Garten gepflegt und schön zu gestalten",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: flowers_logo,
    title: "Renovationen",
    description:
      "Wir bieten umfassende Reparaturdienste, um Ihr Zuhause schnell, effektiv und zuverlässig in einen einwandfreien und funktionalen Zustand zu bringen",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },

  {
    logo: screwdriver_logo,
    title: "Umbauten",
    description:
      "Wir übernehmen Umbauten, um Ihre Räume nach Ihren Vorstellungen zu gestalten, sei es durch Umstrukturierung, Erweiterung oder Anpassung von Wohn- und Arbeitsbereichen",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },

  {
    logo: house_chimney_logo,
    title: "Abriss",
    description:
      "Wir führen professionelle Abrissarbeiten durch, um alte Gebäude oder Strukturen sicher und effizient zu entfernen und Platz für neue Projekte zu schaffen",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
];

const HausmeisterservicePage = () => {
  const handleClick = () => {
    const element = document.getElementById("calculator-title-wrap");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const handleBackClick = () => {
    const element = document.getElementById("main-header");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header page="hausmeister" />
      <div>
        <div className="container">
          <div className="wrap">
            <div id="Startseite" className="header">
              <div className="header-title-block">
                <span className="blue-text sub-header-title">
                  Wir machen Ihr Zuhause wieder funktionstüchtig
                </span>
                <h2 className="blue-text header-title header-title-haus">
                  Alles läuft
                </h2>
                <div className="btns-wrap">
                  <button className="btn" onClick={handleClick}>
                    Jetzt bestellen
                  </button>
                  <div className="btn-wrap" onClick={handleBackClick}>
                    <img alt="back" src={back_logo} />
                    <span>Zurück zu Home</span>
                  </div>
                </div>

                <div className="contacts">
                  <div className="contact phone">
                    <LogoWrapper logo={phone_logo} />
                    <span>+41 79 123 45 67</span>
                  </div>

                  <div className=" contact email">
                    <LogoWrapper logo={mail_logo} />
                    <span>PremReno@gmail.com</span>
                  </div>
                </div>
              </div>
              <img alt="main-illustration" src={Hausmeisterservice_1} />
            </div>

            <div className="content-wrapper">
              <div id="Preise" className="content-title">
                <h2 className="blue-text">Preise für Dienstleistungen</h2>
                <h4 className="blue-text">
                  Transparente Preise für jede Dienstleistung
                </h4>
              </div>

              <div className="hausmeister-block-wrapper">
                {servicesInfo.map((service, index) => {
                  return <ServiceBlockV2 key={index} info={service} />;
                })}
              </div>
            </div>

            <div id="Serviceauftrag">
              <ContactsBlock />
            </div>
          </div>
        </div>
      </div>

      <div id="Kontakte">
        <Footer />
      </div>
    </>
  );
};

export default HausmeisterservicePage;
