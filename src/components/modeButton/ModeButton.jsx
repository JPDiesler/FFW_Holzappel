import React from "react";
import PropTypes from "prop-types";
import "./ModeButton.scss";
import { useState } from "react";

const ModeButton = (props) => {
  const icons = {
    ligth: <i className="bi bi-brightness-high-fill pe-1"></i>,
    dark: <i className="bi bi-moon-stars-fill pe-1"></i>,
    auto: <i className="bi bi-circle-half pe-1"></i>,
  };
  const html = document.getElementsByTagName("html")[0];
  const [icon, setIcon] = useState(icons[html.getAttribute("data-bs-theme")]);

  function onClick(mode) {
    setIcon(icons[mode]);
    html.setAttribute("data-bs-theme", mode);
  }

  return (
    <div className="dropdown">
      <button
        className="btn text-light d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
      >
        <span className="border-end border-light pe-1">{icon}</span>
        <span className="ps-1">
          <i className="bi bi-caret-down-fill"></i>
        </span>
      </button>
      <ul className="dropdown-menu p-2 custom-width">
        <li
          className="d-flex align-items-center p-1 dropdown-item"
          onClick={() => onClick("ligth")}
        >
          <i className="bi bi-brightness-high-fill pe-1"></i>
          Hell
        </li>
        <li
          className="d-flex align-items-center p-1 dropdown-item"
          onClick={() => onClick("dark")}
        >
          <i className="bi bi-moon-stars-fill pe-1"></i>
          Dunkel
        </li>
        <li
          className="d-flex align-items-center p-1 dropdown-item"
          onClick={() => onClick("auto")}
        >
          <i className="bi bi-circle-half pe-1"></i>
          Auto
        </li>
      </ul>
    </div>
  );
};

ModeButton.propTypes = {};

export default ModeButton;
