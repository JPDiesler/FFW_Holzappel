import React, { useState, useEffect, useRef } from "react";
import "./Vehicles.scss";
import PropTypes from "prop-types";
import Vehicle from "./Vehicle";

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const activeIndexRef = useRef(activeIndex);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  useEffect(() => {
    const handleResize = () => {
      const vehicleContainer = document.querySelector(".vehicle_container");
      let width = vehicleContainer.getBoundingClientRect().width;
      if (width < 700) {
        width = 700;
      }
      const newOffset =
        activeIndexRef.current *
        (window.innerWidth + width); /* your calculation */
      setOffset(-newOffset);
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeSlide = (newIndex) => {
    const vehicleContainer = document.querySelector(".vehicle_container");

    if (vehicleContainer) {
      const width = vehicleContainer.getBoundingClientRect().width;
      const offset_1 = window.innerWidth + width;

      if (newIndex >= props.items.length) {
        // If newIndex is greater than props.items.length - 1, wrap around to the start of the list
        newIndex = 0;
        setOffset(0);
      } else if (newIndex < 0) {
        // If newIndex is less than 0, wrap around to the end of the list
        newIndex = props.items.length - 1;
        setOffset(-newIndex * offset_1);
      } else if (newIndex > activeIndex) {
        // next direction
        setOffset(offset - offset_1);
      } else if (newIndex < activeIndex) {
        // prev direction
        setOffset(offset + offset_1);
      }

      setActiveIndex(newIndex);
    }
  };

  const jumpToSlide = (index) => {
    const vehicleContainer = document.querySelector(".vehicle_container");

    if (vehicleContainer) {
      const width = vehicleContainer.getBoundingClientRect().width;
      const offset_1 = window.innerWidth + width;

      if (index >= 0 && index < props.items.length) {
        setOffset(-index * offset_1);
        setActiveIndex(index);
      }
    }
  };

  return (
    <div className="">
      <div className="flex-fill d-flex align-items-center position-relative">
        {isPortrait ? (
          ""
        ) : (
          <button
            onClick={() => changeSlide(activeIndex - 1)}
            className="btn btn-primary p-0 pt-5 pb-5 me-3 z-1"
          >
            <i className="bi bi-chevron-compact-left fs-1"></i>
          </button>
        )}

        <div className="placeholder z-1">{props.items[0]}</div>
        <div
          id="carousel-container"
          className="carousel-container"
          style={{
            transform: `translateX(${offset}px)`,
            transition: "transform 0.75s ease-in-out",
          }}
        >
          {isPortrait ? (
            ""
          ) : (
            <button
              className="btn p-0 pt-5 pb-5 me-3 placeholder"
              disabled={true}
            >
              <i className="bi bi-chevron-compact-left fs-1"></i>
            </button>
          )}

          {props.items.map((vehicle, index) => {
            return <div key={index}>{vehicle}</div>;
          })}
        </div>
        {isPortrait ? (
          ""
        ) : (
          <button
            onClick={() => changeSlide(activeIndex + 1)}
            className="btn btn-primary p-0 pt-5 pb-5 ms-3 z-1"
          >
            <i className="bi bi-chevron-compact-right fs-1"></i>
          </button>
        )}
      </div>
      <div className="flex-fill d-flex justify-content-center align-items-center p-2 pt-3 pb-4">
        {isPortrait ? (
          <button
            onClick={() => changeSlide(activeIndex - 1)}
            className="btn p-2 me-3 z-1"
          >
            <i className="bi bi-chevron-compact-left fs-1"></i>
          </button>
        ) : (
          ""
        )}
        {props.items.map((vehicle, index) => (
          <button
            key={index}
            className={`indicator ${
              index === activeIndex ? "indicator_active " : ""
            }`}
            onClick={() => jumpToSlide(index)}
          ></button>
        ))}
        {isPortrait ? (
          <button
            onClick={() => changeSlide(activeIndex + 1)}
            className="btn p-1 ms-3 z-1"
          >
            <i className="bi bi-chevron-compact-right fs-1"></i>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Carousel;
