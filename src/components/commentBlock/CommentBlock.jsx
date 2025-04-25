import React from "react";
import styles from "./CommentBlock.module.css";
import comma from "./../../components/images/comma.svg";
import star from "./../../components/images/star.svg";

const CommentBlock = ({ avatar, stars = 2, name, text }) => {
  return (
    <div className={styles.box}>
      <div className={styles.comment_imgs}>
        <div className={styles.avatar}>
          <img alt="avatar" src={avatar} />
        </div>
        <img alt="comma" src={comma} className={styles.comma} />
      </div>
      <div className={styles.comment_top}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.rating}>
          {Array.from({ length: stars }, (_, i) => {
            return <img key={i} alt="star" src={star} />;
          })}
        </div>
      </div>

      <p className={styles.comment_text}>{text}</p>
    </div>
  );
};

export default CommentBlock;
