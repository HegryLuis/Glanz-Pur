import React from "react";
import "./ReinigungPage.css";
import bear_logo from "./../../components/images/bear_logo.svg";
import blanket_logo from "./../../components/images/blanket_logo.svg";
import carpet_logo from "./../../components/images/carpet_logo.svg";
import chair_logo from "./../../components/images/chair_logo.svg";
import curtains_logo from "./../../components/images/curtains_logo.svg";
import gloves_logo from "./../../components/images/gloves_logo.svg";
import mattress_logo from "./../../components/images/mattress_logo.svg";
import mop_logo from "./../../components/images/mop_logo.svg";
import pillow_logo from "./../../components/images/pillow_logo.svg";
import sofa_logo from "./../../components/images/sofa_logo.svg";
import sponge_logo from "./../../components/images/sponge_logo.svg";
import spray_logo from "./../../components/images/spray_logo.svg";
import vacuum_logo_2 from "./../../components/images/vacuum_logo_2.svg";
import water_logo from "./../../components/images/water_logo.svg";
import back_logo from "./../../components/images/back_logo.svg";
import phone_logo from "./../../components/images/phone_logo.svg";
import mail_logo from "./../../components/images/mail_logo.svg";
import reinigung_1 from "./../../components/images/reinigung_1.svg";
import reinigung_2 from "./../../components/images/reinigung_2.svg";
import reinigung_3 from "./../../components/images/reinigung_3.svg";
import reinigung_4 from "./../../components/images/reinigung_4.svg";
import reinigung_5 from "./../../components/images/reinigung_5.svg";
import reinigung_6 from "./../../components/images/reinigung_6.svg";
import reinigung_7 from "./../../components/images/reinigung_7.svg";
import LogoWrapper from "../../components/logoWrapper/LogoWrapper";
import ReinigungBlock from "../../components/reinigungBlock/ReinigungBlock";
import ServiceBlock from "../../components/serviceBlock/ServiceBlock";
import Calculator from "../../components/calculator/Calculator";
import ServiceBlockV2 from "../../components/serviceBlockV2/ServiceBlockV2";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";

const cardsInfo = [
  {
    img: reinigung_2,
    title: "Routinereinigung",
    text: "Die Routinereinigung ist eine grundlegende Dienstleistung, um Ihr Zuhause sauber zu halten. Sie umfasst Standardarbeiten, die dazu beitragen, Ihre Wohnräume sauber und hygienisch zu halten. Diese Art der Reinigung ist für die regelmäßige Instandhaltung geeignet und umfasst keine Tiefenreinigung oder spezielle Dienstleistungen.",
    list_title: "Was gehört zu einer typischen Reinigung:",
    list: [
      "Kehren und Wischen von Böden",
      "Wischen von Oberflächen in Wohnräumen",
      "Minimale Reinigung von Badezimmern (ohne detaillierte Reinigung von Spiegeln und Fenstern)",
    ],
    footer_text:
      "Der Preis für die Dienstleistung hängt von der Fläche der Räumlichkeiten, der Anzahl der Zimmer und dem Gesamtverschmutzungsgrad ab. Auch die Reinigungsdauer variiert je nach diesen Parametern. Zusätzliche Optionen wie die gründliche Reinigung von Spiegeln, Fenstern, die Trockenreinigung von Möbeln und andere Spezialarbeiten können gegen einen Aufpreis separat bestellt werden. Dieser Service eignet sich für regelmäßige Aufräumarbeiten ohne zusätzliche Details, die einen tiefer gehenden Eingriff erfordern könnten.",
  },

  {
    img: reinigung_3,
    title: "Allgemeine Reinigung",
    text: "Bei der allgemeinen Reinigung handelt es sich um eine umfassende und gründliche Reinigung der Räumlichkeiten, bei der alle Oberflächen, auch schwer zugängliche Stellen, gereinigt werden. Dieser Service hilft, hartnäckigen Schmutz, Staub und Allergene zu beseitigen und schafft eine saubere und frische Atmosphäre in Ihrem Zuhause oder Büro. Wir sorgen dafür, dass alle Bereiche des Raumes perfekt aufgeräumt sind, einschließlich der Küche, der Bäder, der Wohn- und Nebenräume.",
    list_title: "Außerdem umfasst die allgemeine Reinigung:",
    list: [
      "Reinigung der Matratze",
      "Reinigung des Kissens",
      "Stuhlreinigung",
      "Reinigung von Teppichen",
    ],
    footer_text:
      "Die Kosten und die Dauer der allgemeinen Reinigung hängen von der Größe des Raumes, dem Grad der Verschmutzung und der Dringlichkeit der Arbeiten ab. Je größer die Fläche und je komplexer die Verschmutzung, desto höher der Preis und desto länger die benötigte Zeit. Auch können die Kosten je nach zusätzlichen Dienstleistungen und der Anzahl der Reinigungskräfte, die den Prozess beschleunigen, variieren.",
  },

  {
    img: reinigung_4,
    title: "Reinigung nach Renovierung",
    text: "Die Reinigung nach der Renovierung ist eine spezialisierte Dienstleistung, die darauf abzielt, Bau- und Renovierungsverschmutzungen wie Staub, Schmutz, Farbe und Zementflecken zu entfernen. Sie ist ein wichtiger Schritt, um Ihre Räumlichkeiten nach Abschluss der Renovierungsarbeiten aufzuräumen und für die Nutzung vorzubereiten.",
    list_title: "Die Reinigung nach der Renovierung umfasst: ",
    list: [
      "Entfernung von Bauschutt, Staub und Materialresten (Farbe, Spachtelmasse, Zement usw.).",
      "Reinigung von Fenstern, Rahmen, Fensterbänken von Staub und Flecken",
      "Reinigung von Böden und Wänden von Bauschmutz.",
      "Entfernen von Farb- und Klebeflecken auf Möbeln, Geräten und anderen Oberflächen.",
      "Reinigung von Fliesen, Sanitärkeramik und Küchengeräten von Schmutz nach der Renovierung.",
      "Reinigung von Lüftungsgittern und Schaltern von Staub und Schmutz",
    ],
    footer_text:
      "Die Kosten und die Dauer der Reinigung nach einer Renovierung hängen von der Fläche des Raumes, dem Verschmutzungsgrad und der Menge der verbleibenden Baumaterialien ab. Je stärker die Verschmutzung und je größer die Fläche, desto höher der Preis und desto länger dauert die Reinigung. Auch die Dringlichkeit kann sich auf die Kosten auswirken.",
  },

  {
    img: reinigung_5,
    title: "Reinigung vor der Übergabe",
    text: "Ein umfassender Service, der darauf abzielt, Ihre Räumlichkeiten vor der Übergabe an Mieter, Käufer oder vor der Besichtigung nach Bau- oder Renovierungsarbeiten in einen perfekten Zustand zu bringen. Wir reinigen die Räume gründlich, entfernen Verunreinigungen und schaffen eine Atmosphäre der Frische und Ordnung. Wir achten besonders auf die Details, damit die Immobilie so gepflegt und vorzeigbar wie möglich aussieht. Dank unserer professionellen Arbeitsweise und der Verwendung von Qualitätsreinigungsmitteln sorgen wir für einwandfreie Ergebnisse, so dass das Objekt wieder voll nutzbar oder ausstellungsbereit ist.",
    list_title: "Außerdem umfasst die allgemeine Reinigung:",
    list: [
      "Sofa-Reinigung",
      "Stuhlreinigung",
      "Reinigung der Matratze",
      "Reinigung von Vorhängen",
      "Reinigung von Stofftieren",
      "Reinigung von Teppichen",
      "Reinigung des Kissens",
      "Reinigung des Gummituchs",
    ],
    footer_text:
      "Die Kosten und die Dauer der Reinigung hängen von der Fläche des Objekts, dem Grad der Verschmutzung und der Dringlichkeit der Arbeiten ab. Je größer die Fläche und je mehr Schmutz, desto höher der Preis und desto länger die Reinigungszeit.",
  },

  {
    img: reinigung_6,
    title: "Trockenreinigung",
    text: "Professional deep cleaning is a thorough and effective process designed to remove deep-seated dirt, dust, stains, and unpleasant odours from furniture, textiles, and other surfaces. Using advanced cleaning agents and specialized equipment, this method penetrates fabrics and materials to eliminate contaminants that regular cleaning cannot reach. It not only restores the freshness and appearance of items but also helps maintain hygiene, extending the lifespan of furniture and textiles while creating a cleaner and healthier environment.",
    list_title: "Die chemische Reinigung umfasst:",
    list: [
      "Reinigung von Möbeln, Teppichen, Matratzen, Vorhängen, Decken, Kissen.",
      "Beseitigung von Staub, Flecken, Gerüchen und Allergenen.",
      "Behandlung mit sicheren Reinigungsmitteln.",
    ],
    footer_text:
      "Der Preis für die chemische Reinigung hängt von der Größe und der Anzahl der zu behandelnden Flächen, dem Verschmutzungsgrad, der Art des Materials und dem Bedarf an zusätzlichen Dienstleistungen wie antiseptischer Behandlung oder Gewebeschutz ab.",
  },

  {
    img: reinigung_7,
    title: "Entfernung Reinigung",
    text: "Die Umzugsreinigung ist eine gründliche und detaillierte Reinigung, die darauf abzielt, die Wohnung in einwandfreiem Zustand zu hinterlassen. Im Gegensatz zur normalen Reinigung werden hier alle Oberflächen, einschließlich Möbel, Geräte und Kücheneinrichtungen, intensiv gereinigt. Besondere Aufmerksamkeit gilt auch schwer zugänglichen Stellen wie Ecken, Ritzen und hinter Möbeln. Der gesamte Raum wird von Staub, Schmutz und Ablagerungen befreit, um sicherzustellen, dass die Wohnung nach dem Umzug sowohl für die Übergabe als auch für die bevorstehende Nutzung bereit ist.",
    list_title: "Die Umzugsreinigung umfasst die Reinigung:",
    list: [
      "Möbel",
      "Vorhänge",
      "Schwer zugängliche Stellen",
      "Müllbeseitigung und Desinfektion von Mülleimern",
    ],
    footer_text:
      "Die Kosten und die Dauer der Reinigung hängen von der Fläche des Objekts, dem Grad der Verschmutzung und der Dringlichkeit der Arbeiten ab. Je größer die Fläche und je mehr Schmutz, desto höher der Preis und desto länger die Reinigungszeit.",
  },
];
const servicesInfo = [
  {
    logo: vacuum_logo_2,
    title: "Routinereinigung",
    description:
      "Unterhaltsreinigung der Räumlichkeiten, einschließlich Staubwischen, Reinigen der Böden, Sanitär- und Kücheneinrichtungen, um sie sauber und frisch zu halten",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: sponge_logo,
    title: "Allgemeine Reinigung",
    description:
      "Umfassende und gründliche Reinigung aller Oberflächen, Möbel, Geräte, Fenster, Böden und schwer zugänglichen Stellen, um eine perfekt saubere Umgebung zu gewährleisten",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: gloves_logo,
    title: "Reinigung nach Renovierung",
    description:
      "Tiefenreinigung von Baustaub, Schmutz und Materialrückständen. Beinhaltet das Waschen von Fenstern, Böden, Wänden und allen Oberflächen, um den Raum vollständig bezugsfertig zu machen",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: water_logo,
    title: "Reinigung vor der Übergabe",
    description:
      "Endreinigung der Räumlichkeiten vor der Übergabe. Dazu gehört die Reinigung von Oberflächen, Fenstern, Bädern und Küchen, um die Immobilie in einen perfekten Zustand zu versetzen",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: spray_logo,
    title: "Trockenreinigung",
    description:
      "Professionelle Reinigung von Möbeln, Teppichen und Textilien mit sicheren Produkten und Geräten. Entfernt wirkungsvoll Staub, Flecken, Gerüche und Allergene und sorgt für Sauberkeit und Frische.",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
  {
    logo: mop_logo,
    title: "Reinigung nach Renovierung",
    description:
      "Gründliche Reinigung von Baustaub, Schmutz und Materialrückständen. Beinhaltet die Reinigung von Fenstern, Böden, Wänden und allen Oberflächen, um den Raum vorzubereiten",
    time: "4 - 5 Std.",
    price: "555 - 750 CHF",
  },
];
const additionalServicesInfo = [
  {
    logo: sofa_logo,
    title: "Sofa-Reinigung",
    description:
      "Entfernung von Staub, Flecken und Schmutz von Sofapolstern, einschließlich Stoff- und Lederoberflächen. Für die Tiefenreinigung werden professionelle Produkte verwendet",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
  {
    logo: chair_logo,
    title: "Stuhlreinigung",
    description:
      "Entfernung von Staub, Flecken und Schmutz aus der Polsterung von Sesseln und Stühlen mit professionellen Produkten zur Wiederherstellung von Sauberkeit und Aussehen",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
  {
    logo: mattress_logo,
    title: "Reinigung der Matratze",
    description:
      "Entfernung von Staub, Flecken und Schmutz auf der Matratzenoberfläche. Professionelle Produkte und Geräte werden zur Tiefenreinigung und Wiederherstellung der Frische verwendet",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
  {
    logo: curtains_logo,
    title: "Reinigung von Vorhängen",
    description:
      "Entfernen von Staub, Schmutz und Flecken aus dem Vorhangstoff. Sanfte Mittel und Methoden werden verwendet, um ihre Sauberkeit und ihr Aussehen wiederherzustellen",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
  {
    logo: bear_logo,
    title: "Reinigung von Stofftieren",
    description:
      "Entfernung von Staub, Schmutz und Flecken von Weich- und Kunststoffspielzeug. Sichere und sanfte Produkte werden verwendet, um ihre Sauberkeit und Hygiene wiederherzustellen",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
  {
    logo: carpet_logo,
    title: "Reinigung von Teppichen",
    description:
      "Entfernung von Staub, Schmutz und Flecken aus Teppichen mit professionellen Produkten zur Tiefenreinigung und Wiederherstellung des Aussehens",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
  {
    logo: pillow_logo,
    title: "Reinigung des Kissens",
    description:
      "Entfernung von Staub, Schmutz und Gerüchen von Kissen. Sichere Produkte werden verwendet, um ihre Sauberkeit und ihren Komfort wiederherzustellen",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
  {
    logo: blanket_logo,
    title: "Reinigung des Gummituchs",
    description:
      "Entfernung von Staub, Schmutz und Flecken aus der Bettdecke mit sanften Produkten und Geräten zur Wiederherstellung von Sauberkeit, Weichheit und Komfort",
    time: "4 - 5 Std.",
    price: "ab 5 CHF",
  },
];

const ReinigungPage = () => {
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
      <Header page="reinigung" />

      <div className="container">
        <div className="wrap">
          <div className="header">
            <div id="Startseite" className="header-title-block">
              <span className="blue-text sub-header-title">
                Professionelle Reinigung für Ihr Zuhause und Büro. Schnell und
                zuverlässig.
              </span>
              <h2 className="blue-text header-title">Reinigung</h2>
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
            <img alt="main-illustration" src={reinigung_1} />
          </div>

          <div className="content-wrapper">
            <div id="Dienstleistungen" className="content-title">
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
            <div id="Preise" className="services-title blue-text">
              <h2>Preise für Dienstleistungen</h2>
              <h4>Transparente Preise für jede Dienstleistung</h4>
            </div>

            <div className="services-content">
              {servicesInfo.map((service, index) => {
                return <ServiceBlockV2 key={index} info={service} />;
              })}
            </div>
          </div>

          <div className="services-wrap">
            <div className="services-title blue-text">
              <h2>Preise für zusätzliche Dienstleistungen</h2>
              <h4>
                Erweitern Sie Ihre Reinigung mit unseren zusätzlichen Services
                für noch mehr Sauberkeit.
              </h4>
            </div>

            <div className="services-content">
              {additionalServicesInfo.map((service, index) => {
                return <ServiceBlockV2 key={index} info={service} />;
              })}
            </div>
          </div>
        </div>

        <div id="Calculator" className="calculator-wrap">
          <div className="wrap">
            <Calculator />
          </div>
        </div>
      </div>

      <div id="Kontakte">
        <Footer />
      </div>
    </>
  );
};

export default ReinigungPage;
