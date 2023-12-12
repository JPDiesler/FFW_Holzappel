import React from "react";
import PropTypes from "prop-types";
import DwdWidget from "../dwd/DwdWidget";
import { useState } from "react";

const Navbar = (props) => {
  return (
    <div className="rounded-pill bg-body p-2 d-flex jusitify-content-center align-items-center gap-5 m-3 ">
      <a className="fw-semibold fs-5 text-decoration-none" href="#">
        Aktuelles
      </a>
      <a className="fw-semibold fs-5 text-decoration-none" href="#">
        Fahrzeuge
      </a>
      <a className="fw-semibold fs-5 text-decoration-none" href="#">
        Einsätze
      </a>
      <button className="btn btn-primary rounded-pill fw-semibold d-flex gap-1 align-items-center pt-1 pb-1">
        Spenden
        <i className="bi bi-paypal fs-5"></i>
      </button>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle rounded-pill"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li>
            <span className="d-flex align-items-center fw-semibold gap-1">
              <i className="bi bi-circle-half"></i>Auto
            </span>
          </li>
          <li>
            <span className="d-flex align-items-center fw-semibold gap-1">
              <i className="bi bi-moon-stars-fill"></i> Dunkel
            </span>
          </li>
          <li>
            <span className="d-flex align-items-center fw-semibold gap-1">
              <i className="bi bi-brightness-high-fill"></i> Hell
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
