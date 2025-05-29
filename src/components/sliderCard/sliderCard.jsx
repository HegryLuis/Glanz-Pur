import React, { useState } from "react";
import styles from "./sliderCard.module.css";

const SliderCard = ({ item, onClick }) => {
  const [showMore, setShowMore] = useState(false);
  const paragraphs = item.text.split("\n\n");

  return (
    <div className={styles.slider_card}>
      <div className={styles.card_img_wrap}>
        <img
          src={item.img}
          alt={item.title}
          className={styles.slider_card_img}
        />
        <h4 className={styles.slider_card_title}>{item.title}</h4>
      </div>

      <button
        className={`btn ${styles.btn_slider}`}
        onClick={() => onClick(item.navigate)}
      >
        Jetzt bestellen
      </button>
    </div>
  );
};

export default SliderCard;
