import React from "react";
import styles from "./ServiceBlock.module.css";
import clock_logo from "./../../components/images/clock_logo.svg";
import money_logo from "./../../components/images/money_logo.svg";

const ServiceBlock = ({ info }) => {
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
    </div>
  );
};

export default ServiceBlock;
