import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Hover from "../hover/Hover";
import Donations from "../modules/donations/Donations";

const Navbar = (props) => {
  const [visiblity, setVisiblity] = useState(false);

  function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
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
        <button
          className="btn text-white btn-primary rounded-pill fw-semibold d-flex align-items-center gap-1"
          onClick={() => setVisiblity(true)}
        >
          <i className="bi bi-paypal"></i>Spenden
        </button>
      </div>
      {visiblity == true ? (
        <Hover fullscreen={true} centered={true}>
          <Donations onClose={setVisiblity} />
        </Hover>
      ) : null}
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
