import React from "react";
import { useEffect } from "react";
import "./ModeButton.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

const ModeButton = () => {
  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const icons = {
    ligth: <i className="bi bi-brightness-high-fill pe-1"></i>,
    dark: <i className="bi bi-moon-stars-fill pe-1"></i>,
    auto: <i className="bi bi-circle-half pe-1"></i>,
  };
  const html = document.getElementsByTagName("html")[0];
  const [icon, setIcon] = useState(icons[html.getAttribute("data-bs-theme")]);

  function onClick(mode) {
    setIcon(icons[mode]);
    if (mode == "auto") {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkScheme) {
        html.setAttribute("data-bs-theme", "dark");
      } else {
        html.setAttribute("data-bs-theme", "light");
      }
    } else {
      html.setAttribute("data-bs-theme", mode);
    }
  }

  return (
    <div className="dropdown-center">
      <button
        className="btn text-light d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
      >
        <span className="border-end border-light pe-1">{icon}</span>
        <span className="ps-1">
          <i className="bi bi-caret-down-fill"></i>
        </span>
      </button>
      <ul className="dropdown-menu">
        <li
          className="d-flex align-items-center p-1"
          onClick={() => onClick("ligth")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Light Mode"
        >
          <i className="bi bi-brightness-high-fill pe-1"></i>
        </li>
        <li
          className="d-flex align-items-center p-1"
          onClick={() => onClick("dark")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Dark Mode"
        >
          <i className="bi bi-moon-stars-fill pe-1"></i>
        </li>
        <li
          className="d-flex align-items-center p-1"
          onClick={() => onClick("auto")}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Automatisch"
        >
          <i className="bi bi-circle-half pe-1"></i>
        </li>
      </ul>
    </div>
  );
};

export default ModeButton;
