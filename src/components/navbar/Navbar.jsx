import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Hover from "../hover/Hover";
import Donations from "../modules/donations/Donations";
const Navbar = (props) => {
  const [visiblity, setVisiblity] = useState(false);
  const [menu, setMenu] = useState(false);

  function scrollToElement(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-start align-items-center postion-relative z-4">
        <div
          id="navbar"
          className="bg-black rounded-pill p-2 d-inline-flex jusitify-content-center align-items-center gap-2 position-relative navbar flex-nowrap"
        >
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
          <button
            className="btn text-white rounded-pill fw-semibold d-flex align-items-center gap-1"
            onClick={() => {
              console.log(!menu);
              setMenu(!menu);
            }}
          >
            <i
              className={`bi bi-chevron-down flip-down ${
                menu ? "flip-up" : ""
              }`}
            ></i>
          </button>
          <div
            id="submenu"
            className={`menu d-flex justify-content-center align-items-start gap-2  ${
              menu ? "show" : ""
            }`}
          >
            <div className="">
              <h5 className="m-0 ">Förderverein</h5>
              <ul>
                <li className="p-1 ps-0">
                  <button className="btn rounded-pill text-white fw-semibold">
                    Vorstand
                  </button>
                </li>
              </ul>
            </div>
            <div className="vr ruler" />
            <div className="d-block">
              <h5 className="m-0">Geschichte</h5>
              <ul>
                <li className="p-1 ps-0">
                  <button className="btn rounded-pill text-white fw-semibold">
                    Chronik
                  </button>
                </li>
                <li className="p-1 ps-0">
                  <button className="btn rounded-pill text-white fw-semibold">
                    Hist. Fahrzeuge
                  </button>
                </li>
              </ul>
            </div>
            <div className="vr ruler" />
            <div>
              <h5 className="m-0">Downloads</h5>
              <ul>
                <li className="p-1 ps-0">
                  <button className="btn rounded-pill text-white fw-semibold">
                    Wallpaper
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
