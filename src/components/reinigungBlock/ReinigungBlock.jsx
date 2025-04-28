import React from "react";
import styles from "./ReinigungBlock.module.css";

const ReinigungBlock = ({ info, reverse = false }) => {
  const splitList = (list) => {
    const middle = Math.ceil(list.length / 2);
    return [list.slice(0, middle), list.slice(middle)];
  };

  const [firstColumn, secondColumn] = splitList(info.list);

  return (
    <div className={`${styles.box} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.box_image}>
        <img alt="image" src={info.img} />
      </div>

      <div className={`${styles.box_text} ${reverse ? styles.reverse : ""}`}>
        <h3>{info.title}</h3>
        <p>{info.text}</p>
        <h4>{info.list_title}</h4>

        {info.list.length > 6 ? (
          <div className={styles.box_list_columns}>
            <ul>
              {firstColumn.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
            <ul>
              {secondColumn.map((text, index) => (
                <li key={index + firstColumn.length}>{text}</li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className={styles.box_list}>
            {info.list.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        )}

        <span>{info.footer_text}</span>

        <button className={`btn ${styles.btn_box}`}>Jetzt bestellen</button>
      </div>
    </div>
  );
};

export default ReinigungBlock;
