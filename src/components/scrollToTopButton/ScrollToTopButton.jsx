import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";

const SCROLL_THRESHOLD_VH = 0.9;

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      // Calculate the scroll threshold in pixels
      const scrollThresholdInPixels = window.innerHeight * SCROLL_THRESHOLD_VH;

      // Show the button if the user has scrolled more than the scroll threshold
      setShowButton(window.scrollY > scrollThresholdInPixels);
    };

    // Check the scroll position when the component mounts
    checkScrollPosition();

    // Add an event listener to check the scroll position when scrolling
    window.addEventListener("scroll", checkScrollPosition);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`scrollToTopButton d-flex flex-column align-items-center ${
          showButton ? "show" : ""
        }`}
      >
        <i className="bi bi-chevron-compact-up"></i>
        Back to Top
      </button>
    </div>
  );
}

export default ScrollToTopButton;
