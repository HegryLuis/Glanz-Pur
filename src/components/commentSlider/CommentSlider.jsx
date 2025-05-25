import React, { useState, useEffect } from "react";
import CommentBlock from "../commentBlock/CommentBlock";
import arrow_left from "./../../components/images/arrow_left.svg";
import arrow_right from "./../../components/images/arrow_right.svg";
import "./CommentSlider.css";

const CommentSlider = ({ commentData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1440);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextComment = () => {
    setCurrentIndex(
      (prev) => (prev + (isWideScreen ? 3 : 1)) % commentData.length
    );
  };

  const prevComment = () => {
    setCurrentIndex(
      (prev) =>
        (prev - (isWideScreen ? 3 : 1) + commentData.length) %
        commentData.length
    );
  };

  const visibleComments = isWideScreen
    ? [
        commentData[currentIndex],
        commentData[(currentIndex + 1) % commentData.length],
        commentData[(currentIndex + 2) % commentData.length],
      ]
    : [commentData[currentIndex]];

  return (
    <div className="comments-section">
      <div className="comment-wrap">
        {visibleComments.map((comment, index) => (
          <CommentBlock
            key={index}
            avatar={comment.avatar}
            stars={comment.stars}
            name={comment.name}
            text={comment.text}
          />
        ))}
      </div>
      <div className="comments-btns-wrap">
        <div className="indicator">
          <div className="comments-btn comments-back" onClick={prevComment}>
            <img alt="prev" src={arrow_left} />
          </div>
          <div className="comments-btn comments-next" onClick={nextComment}>
            <img alt="next" src={arrow_right} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSlider;
