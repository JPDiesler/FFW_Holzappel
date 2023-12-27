import React from "react";
import PropTypes from "prop-types";
import DwdWidget from "../dwd/DwdWidget";
import { useState } from "react";

const Navbar = (props) => {
  function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-black rounded-pill p-2 d-inline-flex jusitify-content-center align-items-center gap-2">
      <button
        className="btn text-white  rounded-pill fw-semibold"
        onClick={() => scrollToElement("aktuelles")}
      >
        Aktuelles
      </button>
      <button
        className="btn text-white  rounded-pill fw-semibold"
        onClick={() => scrollToElement("date")}
      >
        Termine
      </button>
      <button
        className="btn text-white rounded-pill fw-semibold"
        onClick={() => scrollToElement("deployment")}
      >
        Einsätze
      </button>
      <button
        className="btn text-white  rounded-pill fw-semibold"
        onClick={() => scrollToElement("vehicles")}
      >
        Fahrzeuge
      </button>
      <button className="btn text-white btn-primary rounded-pill fw-semibold d-flex align-items-center gap-1">
        <i className="bi bi-paypal"></i>Spenden
      </button>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
