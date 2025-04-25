import React from "react";
import styles from "./LogoWrapper.module.css";

const LogoWrapper = ({ logo }) => {
  return (
    <div className={styles.logo_wrap}>
      <img alt="logo" src={logo} />
    </div>
  );
};

export default LogoWrapper;
