import React from "react";
import styles from "./ServiceBlockV2.module.css";
import clock_logo from "./../../components/images/clock_logo.svg";
import money_logo from "./../../components/images/money_logo.svg";

const ServiceBlockV2 = ({ info }) => {
  const handleClick = () => {
    const element = document.getElementById("calculator-title-wrap");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.box}>
      <div className={styles.box_logo}>
        <img alt="icon" src={info.logo} />
      </div>
      <h4 className={styles.title}>{info.title}</h4>
      <p className={styles.text}>
        <span>{info.description}</span>
      </p>

      <div className={styles.box_priceAndTime}>
        <div>
          <img alt="time" src={clock_logo} />
          <p>{info.time}</p>
        </div>
        <div>
          <img alt="price" src={money_logo} />
          <p>{info.price}</p>
        </div>
      </div>

      <button className={`btn ${styles.service_btn}`} onClick={handleClick}>
        Jetzt bestellen
      </button>
    </div>
  );
};

export default ServiceBlockV2;
