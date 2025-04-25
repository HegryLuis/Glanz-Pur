import React, { useState, useEffect } from "react";
import "./Slider.css";
import arrow_left from "./../images/arrow_left.svg";
import arrow_right from "./../images/arrow_right.svg";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    // Сбрасываем анимацию и применяем её снова с задержкой
    setAnimation("");
    const timer = setTimeout(() => {
      setAnimation("slide-in");
    }, 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const prevData = () => {
    setAnimation("fade-out");
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextData = () => {
    setAnimation("fade-out");
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const selectIndex = (index) => {
    setAnimation("fade-out");
    setCurrentIndex(index);
  };

  const getSlide = (offset) => {
    return data[(currentIndex + offset) % data.length];
  };

  return (
    <div className="slider-wrap">
      <div className={`main-img`}>
        <img
          src={data[currentIndex].img}
          alt={data[currentIndex].title}
          className={`slide-img ${animation}`}
        />
      </div>

      <div className="slider-container">
        <div className={`text-block ${animation}`}>
          <h4>{data[currentIndex].title}</h4>
          {data[currentIndex].text.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="controls-block">
          <div className="unactive-slide">
            {[1, 2].map((offset) => {
              const slide = getSlide(offset);
              const index = (currentIndex + offset) % data.length;
              return (
                <div
                  className="slide"
                  key={index}
                  onClick={() => selectIndex(index)}
                >
                  <img alt="logo" src={slide.img} />
                  <span>{slide.title}</span>
                </div>
              );
            })}
          </div>

          <div className="controls">
            <div className="indicator">
              <div onClick={prevData}>
                <img alt="prev" src={arrow_left} />
              </div>
              <span id="slide-indicator">
                {currentIndex + 1} / {data.length}
              </span>
              <div onClick={nextData}>
                <img alt="next" src={arrow_right} />
              </div>
            </div>
            <button className="btn">Jetzt bestellen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
