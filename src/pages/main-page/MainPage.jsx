import React from "react";
import "./MainPage.css";
import main_illustration from "./../../components/images/main_illustration.svg";
import phone_logo from "./../../components/images/phone_logo.svg";
import mail_logo from "./../../components/images/mail_logo.svg";
import LogoWrapper from "../../components/logoWrapper/LogoWrapper";
import InfoBlock from "../../components/infoBlock/InfoBlock";
import vacuum_logo from "./../../components/images/vacuum_logo.svg";
import people_logo from "./../../components/images/people_logo.svg";
import euro_logo from "./../../components/images/euro_logo.svg";
import slider_img_1 from "./../../components/images/slider_img_1.png";
import slider_img_2 from "./../../components/images/slider_img_2.png";
import slider_img_3 from "./../../components/images/slider_img_3.png";
import Slider from "../../components/slider/Slider";
import comment_avatar from "./../../components/images/comment_avatar.png";
import CommentSlider from "../../components/commentSlider/CommentSlider";

const MainPage = () => {
  const handleClick = () => {
    const element = document.getElementById("calculator-title-wrap");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const infoData = [
    {
      logo: vacuum_logo,
      title: "Professionelle Ausrüstung",
      text: "Wir verwenden hochwertige und effiziente Geräte sowie Reinigungsmittel, um makellose Sauberkeit in Ihrem Zuhause oder Büro zu gewährleisten. Dabei achten wir auf jedes Detail, um auch schwer zugängliche Stellen gründlich zu reinigen und eine angenehme, saubere Umgebung zu schaffen",
    },
    {
      logo: people_logo,
      title: "Geschultes Personal",
      text: "Unsere Fachleute sind geschult und aktualisieren regelmäßig ihre Qualifikationen. Sie verwenden moderne Reinigungs- und Reparaturmethoden und professionelle Ausrüstung, um eine hohe Qualität der Dienstleistungen zu gewährleisten. Wir garantieren, dass die Arbeit effizient ausgeführt wird",
    },
    {
      logo: euro_logo,
      title: "Garantie der Zuverlässigkeit",
      text: "Wir halten unsere Verpflichtungen in einem formellen Vertrag fest. Wenn das Ergebnis nicht wie vereinbart ist, werden wir die Mängel kostenlos beheben. Bei Sachschäden, die durch unser Verschulden entstanden sind, übernehmen wir die Verantwortung und ersetzen den Schaden vollständig.",
    },
  ];

  const sliderData = [
    {
      img: slider_img_1,
      title: "Reinigung",
      text: `Wir bieten professionelle Reinigungsdienste für Ihr Zuhause mit hochwertiger Ausrüstung und effektiven Reinigungsmitteln. Die Standardreinigung umfasst Staubwischen, Bodenwischen, Reinigung von Möbeln, Sanitäranlagen und Küchenoberflächen.\n\nZusätzliche Leistungen wie Teppichreinigung, Polstermöbelreinigung und Fleckenentfernung können auf Wunsch gegen einen kleinen Aufpreis hinzugefügt werden.\n\nUnser Team garantiert schnelle und gründliche Arbeit, um Ihr Zuhause sauber und gemütlich zu hinterlassen. Unsere Preise sind im Vergleich zu Wettbewerbern günstig und bieten Ihnen ein ausgezeichnetes Preis-Leistungs-Verhältnis.`,
    },

    {
      img: slider_img_2,
      title: "Umzug",

      text: "Ein Umzug kann viel Zeit und Energie kosten – wir machen es Ihnen so einfach wie möglich. Unser Service bietet Ihnen professionelle Unterstützung, damit Sie sich keine Sorgen um den Transport oder die Reinigung machen müssen. \n\nWir übernehmen den sicheren und zuverlässigen Transport Ihrer Möbel, Kartons und Haushaltsgegenstände und sorgen dafür, dass alles unbeschadet an Ihrem neuen Wohnort ankommt. Zusätzlich kümmern wir uns um eine gründliche Reinigung Ihrer alten oder neuen Wohnung, damit Sie den Umzug stressfrei abschließen können. \n\nOb Sie nur den Transport, nur die Reinigung oder beides als Komplettpaket buchen möchten – wir passen uns Ihren individuellen Bedürfnissen an. Unser Team arbeitet effizient, sorgfältig und zuverlässig, damit Ihr Umzug reibungslos und entspannt verläuft.",
    },
    {
      img: slider_img_3,
      title: "Alltagshelfer",
      text: "Kleine Reparaturen im Haushalt können schnell zur Herausforderung werden – wir sind für Sie da. Unser Alltagshelfer-Service bietet Ihnen professionelle Unterstützung bei handwerklichen Arbeiten, damit Ihr Zuhause immer in einwandfreiem Zustand bleibt. \n\nOb tropfender Wasserhahn, defekte Steckdose oder Möbelmontage – unsere erfahrenen Handwerker kümmern sich zuverlässig und schnell um alle anfallenden Reparaturen. Mit Fachwissen und dem richtigen Werkzeug lösen wir kleine und größere Probleme effizient und sauber. \n\nSie entscheiden, welche Hilfe Sie benötigen. Buchen Sie unseren Service flexibel nach Ihrem Bedarf und genießen Sie die Sicherheit, dass Ihr Zuhause in den besten Händen ist.",
    },
  ];

  const commentData = [
    {
      avatar: comment_avatar,
      stars: 5,
      name: "Luca Müller",
      text: "Ich war sehr zufrieden mit der Qualität der Dienstleistung. Das Team kam pünktlich, verwendete hochwertiges Equipment und professionelle Reinigungsmittel. Mein Zuhause ist jetzt makellos sauber, und die Reinigung wurde schnell und sorgfältig durchgeführt. Ich empfehle jedem, der nach einem zuverlässigen und günstigen Reinigungsservice sucht!",
    },
    {
      avatar: comment_avatar,
      stars: 5,
      name: "John Snow",
      text: "Ich war sehr zufrieden mit der Qualität der Dienstleistung. Das Team kam pünktlich, verwendete hochwertiges Equipment und professionelle Reinigungsmittel. Mein Zuhause ist jetzt makellos sauber, und die Reinigung wurde schnell und sorgfältig durchgeführt. Ich empfehle jedem, der nach einem zuverlässigen und günstigen Reinigungsservice sucht!",
    },
    {
      avatar: comment_avatar,
      stars: 5,
      name: "Lukas Strong",
      text: "Ich war sehr zufrieden mit der Qualität der Dienstleistung. Das Team kam pünktlich, verwendete hochwertiges Equipment und professionelle Reinigungsmittel. Mein Zuhause ist jetzt makellos sauber, und die Reinigung wurde schnell und sorgfältig durchgeführt. Ich empfehle jedem, der nach einem zuverlässigen und günstigen Reinigungsservice sucht!",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="wrap">
          <div id="main-header" className="main-header">
            <div className="main-title-block">
              <span className="blue-text main-text">
                Professionelle Reinigung für Ihr Zuhause und Büro. Schnell und
                zuverlässig.
              </span>
              <h2 className="blue-text">Glanz Pur</h2>
              <button className="btn" onClick={handleClick}>
                Jetzt bestellen
              </button>

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
            <img alt="main-illustration" src={main_illustration} />
          </div>

          <div className="main-content">
            <h2 className="blue-text">Warum wir</h2>
            <div className="content-wrap">
              {infoData.map((data, index) => {
                return (
                  <InfoBlock
                    key={index}
                    logo={data.logo}
                    title={data.title}
                    text={data.text}
                    className="content-block"
                  />
                );
              })}
            </div>
          </div>

          <div className="slider-content">
            <h2 className="blue-text">Dienstleistungen</h2>

            <Slider data={sliderData} />
          </div>

          <div className="comment-content">
            <h2 className="blue-text">Was die Leute über uns sagen</h2>

            <CommentSlider commentData={commentData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
