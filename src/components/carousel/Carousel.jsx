import React from "react";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const contentRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleIndexChange(index + 1),
    onSwipedRight: () => handleIndexChange(index - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    setContentWidth(contentRef.current.offsetWidth);

    const handleResizeContent = () => {
      setContentWidth(contentRef.current.offsetWidth);
    };

    const handleResizeWindow = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResizeContent);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeContent);
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  function handleIndexChange(newIndex) {
    if (newIndex < 0) {
      setIndex(props.children.length - 1);
    } else if (newIndex >= props.children.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  }

  return (
    <div className={`d-flex flex-column ${props.className}`}>
      <div id="content-box" className="position-relative d-flex z-1">
        <div id="size-placeholder" className="invisible" ref={contentRef}>
          {props.children[0]}
        </div>
        <div
          className="position-absolute d-flex"
          style={{
            gap: "50vw",
            transform: `translateX(${
              -index * contentWidth + -index * (windowWidth * 0.5)
            }px)`,
            transition: "transform 0.75s ease-in-out",
          }}
          {...handlers}
        >
          {props.children}
        </div>
      </div>
      <div
        id="secondary-controls"
        className="d-flex justify-content-center align-items-center z-2"
      >
        <button
          id="prev"
          className="btn me-2"
          onClick={() => handleIndexChange(index - 1)}
        >
          <i className="bi bi-chevron-left fs-5"></i>
        </button>
        <div className="flex-fill d-flex align-items-center flex-wrap gap-2">
          {props.children.map((child, i) => {
            return (
              <button
                key={i}
                onClick={() => handleIndexChange(i)}
                className="flex-fill"
                style={{
                  height: "6px",
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor:
                    index === i ? "var(--bs-secondary-bg)" : "#b4b4b4",
                  margin: "0 3px",
                }}
              />
            );
          })}
        </div>
        <button
          id="next"
          className="btn"
          onClick={() => handleIndexChange(index + 1)}
        >
          <i className="bi bi-chevron-right fs-5"></i>
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Carousel;
