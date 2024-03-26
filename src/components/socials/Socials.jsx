import React from "react";
import { useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import PropTypes from "prop-types";

const Socials = (props) => {
  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <h5 className={props.darkMode ? "" : "text-light"}>Folg uns doch!</h5>
      <span className="rounded-pill bg-black d-inline-flex gap-3 ps-3 pe-3 pt-1 pb-1">
        <a
          href="https://www.instagram.com/feuerwehrholzappel/"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="text-white bi bi-instagram fs-5"></i>
        </a>
        <a
          href="https://www.facebook.com/FeuerwehrHolzappel"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="text-white bi bi-facebook fs-5"></i>
        </a>
        {/* <a
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="TikTok"
          >
            <i className="text-white bi bi-tiktok fs-5"></i>
          </a>
          <a
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Threads"
          > 
            <i className="text-white bi bi-threads fs-5"></i>
          </a>*/}
      </span>
    </div>
  );
};

Socials.propTypes = { darkMode: PropTypes.bool };
Socials.defaultProps = { darkMode: true };

export default Socials;
