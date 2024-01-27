import React, { useState, useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
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

  function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`scrollToTopButton d-flex align-items-start justify-content-center text-white ${
          showButton ? "show" : ""
        }`}
      >
        <div className="d-flex flex-column align-items-center justifiy-content-start">
          <i className="bi bi-chevron-compact-up text"></i>
          <span className="text">Nach oben</span>
        </div>
      </button>
      <div className={`sideMenu ${showButton ? "show" : ""}`}>
        <button
          className="btn text-white rounded-pill fw-semibold button"
          onClick={() => scrollToElement("aktuelles")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Aktuelles"
        >
          <i className="bi bi-newspaper"></i>
        </button>
        <button
          className="btn text-white rounded-pill fw-semibold button"
          onClick={() => scrollToElement("date")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Termine"
        >
          <i className="bi bi-calendar-week"></i>
        </button>
        <button
          className="btn text-white rounded-pill fw-semibold button"
          onClick={() => scrollToElement("deployment")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Einsätze"
        >
          <i className="bi bi-bell"></i>
        </button>
        <button
          className="btn text-white rounded-pill fw-semibold button"
          onClick={() => scrollToElement("vehicles")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Fahrzeuge"
        >
          <i className="bi bi-truck"></i>
        </button>
      </div>
    </div>
  );
}

export default ScrollToTopButton;
