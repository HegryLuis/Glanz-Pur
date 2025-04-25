import React from "react";
import styles from "./infoBlock.module.css";

const InfoBlock = ({ title, text, logo }) => {
  return (
    <div className={styles.box}>
      <div className={styles.info_logo}>
        <img alt="icon" src={logo} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>
        <span>{text}</span>
      </p>
    </div>
  );
};

export default InfoBlock;
