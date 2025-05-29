import React, { useState, useEffect } from "react";
import "./Slider.css";
import arrow_left from "./../images/arrow_left.svg";
import arrow_right from "./../images/arrow_right.svg";
import SliderCard from "../sliderCard/sliderCard";
import { useNavigate } from "react-router-dom";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setAnimation("");
      const timer = setTimeout(() => {
        setAnimation("slide-in");
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isMobile]);

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

  // mobile(max-width: 1024px) — just render all cards
  if (isMobile) {
    return (
      <div className="slider-wrap-mobile">
        {data.map((item, index) => {
          return (
            <SliderCard key={index} item={item} onClick={handleNavigate} />
          );
        })}
      </div>
    );
  }

  // desktop (max-width > 1024px) - slider
  return (
    <div className="slider-wrap">
      <div className="main-img">
        <img
          src={data[currentIndex].img}
          alt={data[currentIndex].title}
          className={`slide-img ${animation}`}
        />
        <div className="unactive-slide-mobile">
          {[1, 2].map((offset) => {
            const slide = data[(currentIndex + offset) % data.length];
            const index = (currentIndex + offset) % data.length;
            return (
              <div
                className="slide-mobile"
                key={index}
                onClick={() => selectIndex(index)}
              >
                <span>{slide.title}</span>
              </div>
            );
          })}
        </div>
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
              const slide = data[(currentIndex + offset) % data.length];
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
            <div className="slider-indicator indicator">
              <div onClick={prevData}>
                <img alt="prev" src={arrow_left} />
              </div>
              <span className="slide-indicator">{currentIndex + 1}</span>

              <span className="slide-indicator">/</span>
              <span className="slide-indicator">{data.length}</span>
              <div onClick={nextData}>
                <img alt="next" src={arrow_right} />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => handleNavigate(data[currentIndex].navigate)}
            >
              Jetzt bestellen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
