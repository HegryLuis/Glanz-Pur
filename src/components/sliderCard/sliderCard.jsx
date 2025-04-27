import React, { useState } from "react";
import styles from "./sliderCard.module.css";

const SliderCard = ({ item }) => {
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

      <p className={styles.slider_card_text}>
        {showMore
          ? paragraphs.map((p, idx) => (
              <span key={idx}>
                {p}
                <br />
                <br />
              </span>
            ))
          : `${paragraphs[0]}...`}
      </p>

      {!showMore && (
        <button
          className={styles.show_more_btn}
          onClick={() => setShowMore(true)}
        >
          Show more
        </button>
      )}

      <button className={`btn ${styles.btn_slider}`}>Jetzt bestellen</button>
    </div>
  );
};

export default SliderCard;
