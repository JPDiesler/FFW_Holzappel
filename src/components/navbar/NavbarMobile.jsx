import React from "react";
import { useState } from "react";
import Hover from "../hover/Hover";
import Donations from "../modules/donations/Donations";
import "./Navbar.scss";
const NavbarMobile = () => {
  const [visiblity, setVisiblity] = useState(false);

  function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div
        className="navball"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        <i className="bi bi-list"></i>
      </div>

      <div
        className="offcanvas offcanvas-bottom menu-height border-0 rounded-top-5 menu"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h1 className="menu-title" id="offcanvasBottomLabel">
            Menü
          </h1>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-column justifiy-content-center align-items-center">
            <div className="fs-1 d-flex flex-wrap justify-content-center gap-1">
              <button
                className="fs-1  btn text-white  rounded-pill fw-semibold"
                onClick={() => scrollToElement("aktuelles")}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
              >
                Aktuelles
              </button>
              <button
                className="fs-1 btn text-white  rounded-pill fw-semibold"
                onClick={() => scrollToElement("date")}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
              >
                Termine
              </button>
              <button
                className="fs-1 btn text-white rounded-pill fw-semibold"
                onClick={() => scrollToElement("deployment")}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
              >
                Einsätze
              </button>
              <button
                className="fs-1 btn text-white  rounded-pill fw-semibold"
                onClick={() => scrollToElement("vehicles")}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
              >
                Fahrzeuge
              </button>
              <button
                className="fs-1 btn text-white btn-primary rounded-pill fw-semibold d-flex align-items-center gap-1 mt-3 mb-3"
                onClick={() => setVisiblity(true)}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
              >
                <i className="fs-1 bi bi-paypal"></i>Spenden
              </button>
            </div>

            <button
              type="button"
              className="btn fs-1 close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
