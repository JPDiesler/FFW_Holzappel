import React from "react";
import { useEffect, useRef } from "react";
import "./ModeButton.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

const icons = {
  ligth: <i className="bi bi-brightness-high-fill pe-1"></i>,
  dark: <i className="bi bi-moon-stars-fill pe-1"></i>,
};

const ModeButton = () => {
  const ulRef = useRef(null);
  const buttonRef = useRef(null);
  const html = document.getElementsByTagName("html")[0];
  const [icon, setIcon] = useState(icons[html.getAttribute("data-bs-theme")]);
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState(icons[html.getAttribute("data-bs-theme")]);

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      setMenu(false);
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function setColorMode(mode) {
    setIcon(icons[mode]);
    if (mode == "auto") {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkScheme) {
        html.setAttribute("data-bs-theme", "dark");
        setMode("dark");
      } else {
        html.setAttribute("data-bs-theme", "light");
        setMode("light");
      }
    } else {
      html.setAttribute("data-bs-theme", mode);
      setMode(mode);
    }
  }

  return (
    <div className="position-relative">
      <button
        ref={buttonRef}
        className="btn text-light d-flex align-items-center justify-content-center"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setMenu(!menu);
        }}
      >
        <span className="border-end border-light p1-1">{icon}</span>
        <span className="ps-1">
          <i className="bi bi-caret-down-fill"></i>
        </span>
      </button>
      {menu ? (
        <ul
          ref={ulRef}
          className={`modeMenu border rounded p-2 ${
            mode == "light" ? "bg-body" : "bg-secondary-subtle"
          }`}
        >
          <li>
            <button
              className="btn d-flex align-items-center justify-content-center p-1"
              onClick={() => {
                setMenu(false);
                setColorMode("ligth");
              }}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Light Mode"
            >
              <i className="bi bi-brightness-high-fill p-1"></i>
            </button>
          </li>
          <li>
            <button
              className="btn d-flex align-items-center justify-content-center p-1"
              onClick={() => {
                setMenu(false);
                setColorMode("dark");
              }}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Dark Mode"
            >
              <i className="bi bi-moon-stars-fill p-1"></i>
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default ModeButton;
