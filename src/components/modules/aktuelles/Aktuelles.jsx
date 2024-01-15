import React from "react";
import PropTypes from "prop-types";
import "./Aktuelles.scss";
const Aktuelles = (props) => {
  return (
    <div className="d-flex flex-column module">
      <h1>Aktuelles</h1>
      <div className="flex-fill d-flex justify-content-center">
        <div
          id="socialmedia"
          className="d-inline-flex flex-column fw-semibold align-items-center align-self-end"
        >
          <h5>Folg uns doch!</h5>
          <span className="rounded-pill bg-black d-inline-flex gap-3 ps-3 pe-3 pt-1 pb-1">
            <a href="#">
              <i className="text-white bi bi-instagram fs-5"></i>
            </a>
            <a href="#">
              <i className="text-white bi bi-facebook fs-5"></i>
            </a>
            <a href="#">
              <i className="text-white bi bi-tiktok fs-5"></i>
            </a>
            <a href="#">
              <i className="text-white bi bi-threads fs-5"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

Aktuelles.propTypes = {};

export default Aktuelles;
