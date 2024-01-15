import React from "react";
import { useState } from "react";
import Hover from "../hover/Hover";
import Donations from "../modules/donations/Donations";
const NavbarMobile = () => {
  const [visiblity, setVisiblity] = useState(false);

  function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fs-1 d-flex flex-wrap justify-content-center gap-1">
      <button
        className="fs-1  btn text-white  rounded-pill fw-semibold"
        onClick={() => scrollToElement("aktuelles")}
      >
        Aktuelles
      </button>
      <button
        className="fs-1 btn text-white  rounded-pill fw-semibold"
        onClick={() => scrollToElement("date")}
      >
        Termine
      </button>
      <button
        className="fs-1 btn text-white rounded-pill fw-semibold"
        onClick={() => scrollToElement("deployment")}
      >
        Einsätze
      </button>
      <button
        className="fs-1 btn text-white  rounded-pill fw-semibold"
        onClick={() => scrollToElement("vehicles")}
      >
        Fahrzeuge
      </button>
      <button
        className="fs-1 btn text-white btn-primary rounded-pill fw-semibold d-flex align-items-center gap-1 mt-3 mb-3"
        onClick={() => setVisiblity(true)}
      >
        <i className="fs-1 bi bi-paypal"></i>Spenden
      </button>
    </div>
  );
};

export default NavbarMobile;
