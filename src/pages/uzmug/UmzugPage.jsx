import React, { useState } from "react";
import "./UmzugPage.css";
import umzug_1 from "./../../components/images/umzug_1.svg";
import umzug_2 from "./../../components/images/umzug_2.svg";
import umzug_3 from "./../../components/images/umzug_3.svg";
import umzug_4 from "./../../components/images/umzug_4.svg";
import transporter_icon from "./../../components/images/transporter_icon.svg";
import bucketCleaning_icon from "./../../components/images/bucketCleaning_icon.svg";
import rings_icon from "./../../components/images/rings_icon.svg";
import back_logo from "./../../components/images/back_logo.svg";
import phone_logo from "./../../components/images/phone_logo.svg";
import mail_logo from "./../../components/images/mail_logo.svg";
import LogoWrapper from "../../components/logoWrapper/LogoWrapper";
import ReinigungBlock from "../../components/reinigungBlock/ReinigungBlock";
import InfoBlock from "../../components/infoBlock/InfoBlock";
import ServiceBlock from "../../components/serviceBlock/ServiceBlock";
import Calculator from "../../components/calculator/Calculator";

const cardsInfo = [
  {
    img: umzug_2,
    title: "Umzug",
    text: "Wir bieten eine umfassende Unterstützung für den Transport von Möbeln und persönlichen Gegenständen und begleiten Sie durch den gesamten Umzugsprozess. Vom sorgfältigen Verpacken Ihrer Habseligkeiten bis hin zum sicheren Transport und der Entladung am neuen Zielort übernehmen wir alle Schritte. Dabei achten wir darauf, dass alles ordnungsgemäß und sicher verpackt wird, um Schäden während des Transports zu vermeiden. Unsere Fachleute sorgen dafür, dass alle Gegenstände optimal im Transportfahrzeug verstaut werden, um den Platz effizient zu nutzen und die Sicherheit Ihrer Möbel zu gewährleisten. Wir stellen sicher, dass Ihre Sachen sicher und unversehrt an ihrem neuen Bestimmungsort ankommen.\n\nDie Preisgestaltung für unseren Umzugsservice hängt von einer Reihe von Faktoren ab. Zunächst spielt die Entfernung zwischen dem aktuellen und dem neuen Standort eine wesentliche Rolle, da längere Strecken mehr Zeit und Ressourcen in Anspruch nehmen. Auch die Anzahl der zu transportierenden Zimmer und das Volumen sowie das Gewicht der Möbel sind entscheidende Faktoren, da sie den benötigten Platz und die Anzahl der Umzugshelfer bestimmen. Je mehr Gegenstände es zu transportieren gibt, desto umfangreicher wird der Aufwand.\n\nJe mehr Zeit und Ressourcen für den Umzug erforderlich sind, desto höher wird der Preis. Das bedeutet, dass der Aufwand für die Durchführung des Umzugs, die Zahl der benötigten Helfer und das Volumen der zu transportierenden Sachen direkt den Preis beeinflussen. Wir bieten Ihnen jedoch eine transparente Preisstruktur, die sicherstellt, dass Sie genau wissen, wofür Sie bezahlen. ",
  },
  {
    img: umzug_3,
    title: "Entfernung Reinigung",
    text: "Die Umzugsreinigung ist eine gründliche und detaillierte Reinigung, die darauf abzielt, die Wohnung in einwandfreiem Zustand zu hinterlassen. Im Gegensatz zur normalen Reinigung werden hier alle Oberflächen, einschließlich Möbel, Geräte und Kücheneinrichtungen, intensiv gereinigt. Besondere Aufmerksamkeit gilt auch schwer zugänglichen Stellen wie Ecken, Ritzen und hinter Möbeln. Der gesamte Raum wird von Staub, Schmutz und Ablagerungen befreit, um sicherzustellen, dass die Wohnung nach dem Umzug sowohl für die Übergabe als auch für die bevorstehende Nutzung bereit ist.",
    list_title: "Die Umzugsreinigung umfasst die Reinigung:",
    list: [
      "Möbel",
      "Vorhänge",
      "Schwer zugängliche Stellen",
      "Müllbeseitigung und Desinfektion von Mülleimern",
      "Fenster, Rahmen und Fensterbänke",
      "Küchen",
      "Bäder",
      "Fußböden und Sockelleisten",
    ],
    footer_text:
      "Der Preis für die Dienstleistung hängt von der Fläche der Räumlichkeiten, der Anzahl der Zimmer und dem Gesamtverschmutzungsgrad ab. Auch die Reinigungsdauer variiert je nach diesen Parametern. Zusätzliche Optionen wie die gründliche Reinigung von Spiegeln, Fenstern, die Trockenreinigung von Möbeln und andere Spezialarbeiten können gegen einen Aufpreis separat bestellt werden. Dieser Service eignet sich für regelmäßige Aufräumarbeiten ohne zusätzliche Details, die einen tiefer gehenden Eingriff erfordern könnten.",
  },
  {
    img: umzug_4,
    title: "Umfassender Service",
    text: "Unser Komplexservice kombiniert zwei wichtige Dienstleistungen: den Umzugsservice und die Umzugsreinigung. So sparen Sie Zeit und Aufwand, da wir sowohl den sicheren Transport Ihrer Möbel als auch die gründliche Reinigung Ihrer alten oder neuen Wohnung übernehmen.\n\nWir kümmern uns um die fachgerechte Verpackung Ihrer Gegenstände, den sicheren Transport und die sorgfältige Entladung am neuen Standort. Dabei sorgen wir dafür, dass alles unbeschädigt ankommt und auf Wunsch auch Möbel aufgebaut werden. Gleichzeitig reinigen wir die alte Wohnung gründlich, damit sie in einwandfreiem Zustand übergeben werden kann. Dazu gehören die Reinigung von Böden, Fenstern, Küche, Bad sowie schwer zugänglichen Stellen, um höchste Sauberkeit zu gewährleisten.\n\nDer Preis und die Dauer unseres Services hängen von verschiedenen Faktoren ab. Entscheidend sind die Wohnungsgröße, die Menge der Möbel und Gegenstände sowie die Entfernung zwischen den Standorten. Auch der Reinigungsaufwand spielt eine Rolle – stärker verschmutzte Wohnungen oder spezielle Reinigungsanforderungen erfordern mehr Zeit und Ressourcen.\n\nZusätzliche Leistungen wie der Aufbau von Möbeln, die Entsorgung alter Gegenstände oder besondere Transportanforderungen können den Gesamtumfang beeinflussen. Unser Ziel ist es, Ihnen einen reibungslosen, effizienten und stressfreien Umzug zu ermöglichen – professionell, zuverlässig und aus einer Hand.",
  },
];

// {
//     logo: vacuum_logo_2,
//     title: "Routinereinigung",
//     description:
//       "Unterhaltsreinigung der Räumlichkeiten, einschließlich Staubwischen, Reinigen der Böden, Sanitär- und Kücheneinrichtungen, um sie sauber und frisch zu halten",
//     time: "4 - 5 Std.",
//     price: "555 - 750 CHF",
//   },
const infoData = [
  {
    logo: transporter_icon,
    title: "Umzug",
    description:
      "Umzug bietet Unterstützung beim sicheren Transport Ihrer Möbel und persönlichen Gegenstände. Wir kümmern uns um Verpackung und Entladung, damit Ihr Umzug verläuft.",
    time: "ab 5 Std.",
    price: "ab 500 CHF",
  },
  {
    logo: bucketCleaning_icon,
    title: "Reinigung nach Renovierung",
    description:
      "Gründliche Reinigung von Baustaub, Schmutz und Materialrückständen. Beinhaltet die Reinigung von Fenstern, Böden, Wänden und allen Oberflächen, um den Raum vorzubereiten",
    time: "ab 10 Std.",
    price: "ab 400 CHF",
  },
  {
    logo: rings_icon,
    title: "Umfassender Service",
    description:
      "Ein umfassender Service kombiniert Reinigung und Transport. Wir kümmern uns um den sicheren Transport Ihrer Möbel und die Reinigung Ihrer alten und neuen Wohnung",
    time: "ab 16 Std.",
    price: "ab 1000 CHF",
  },
];

const UmzugPage = () => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="header">
          <div className="header-title-block">
            <span className="blue-text sub-header-title">
              Genießen Sie eine frische und hygienische Umgebung – wir
              übernehmen die Arbeit für Sie!
            </span>
            <h2 className="blue-text header-title">Umzug</h2>
            <div className="btns-wrap">
              <button className="btn">Jetzt bestellen</button>
              <div className="btn-wrap">
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
          <img alt="main-illustration" src={umzug_1} />
        </div>

        <div className="content-wrapper">
          <div className="content-title">
            <h2 className="blue-text">Unsere Dienstleistungen</h2>
            <h4 className="blue-text">
              Hier finden Sie eine detaillierte Beschreibung unserer
              Reinigungsleistungen
            </h4>
          </div>

          <div className="block-wrapper">
            {cardsInfo.map((card, index) => {
              const reverse = index % 2 === 1 ? true : false;

              return (
                <ReinigungBlock key={index} info={card} reverse={reverse} />
              );
            })}
          </div>
        </div>

        <div className="services-wrap">
          <div className="services-title blue-text">
            <h2>Dienstleistungspreise</h2>
            <h4>Transparente Preise für jede Dienstleistung</h4>
          </div>

          <div className="services-content">
            {infoData.map((data, index) => {
              return <ServiceBlock info={data} key={index} />;
            })}
          </div>
        </div>
      </div>

      <div className="calculator-wrap">
        <div className="wrap">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default UmzugPage;
