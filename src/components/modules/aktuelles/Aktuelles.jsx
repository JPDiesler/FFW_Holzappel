import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Aktuelles.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const Aktuelles = (props) => {
  const [isDarkMode, setIsDarkMode] = useState("dark");

  useEffect(() => {
    // Create a MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      // Removed unused observer parameter
      // Look through all mutations that just occured
      for (let mutation of mutationsList) {
        // If the data-bs-theme attribute was modified
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-bs-theme"
        ) {
          // Update the chart
          const html = document.getElementsByTagName("html")[0];
          const colorMode = html.getAttribute("data-bs-theme");
          setIsDarkMode(colorMode == "dark" ? true : false);
        }
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  window.addEventListener("scroll", function () {
    const changelogDetails = document.querySelectorAll(".changelog-details");
    changelogDetails.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 0) {
        element.style.top = "90px"; // Adjust this value to your liking
      } else {
        element.style.top = "20px"; // This should be the same as the initial top value in your CSS
      }
    });
  });

  return (
    <div
      className={`module scrollbar ${
        isDarkMode ? "bg-secondary-subtle" : "bg-body"
      }`}
    >
      <div className="blog">
        <div id="a1" className="entry gap-5">
          <div id="changelog-details" className="changelog-details gap-4 pb-5">
            <span>
              <svg
                className={`bg-body  text-body-secondary commit ${
                  isDarkMode ? "light bg-secondary-subtle" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="38"
                height="38"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="d-flex flex-column align-items-start gap-2">
              <h2 className="m-0">Neue Website!</h2>
              21/01/2024
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge rounded-pill text-bg-primary">News</span>
                <span className="badge rounded-pill text-bg-primary">
                  Event
                </span>
                <span className="badge rounded-pill text-bg-warning">Neu</span>
                <span className="badge rounded-pill text-bg-danger">
                  Warnung
                </span>

                <span className="badge rounded-pill text-bg-success">
                  Entwarnung
                </span>
                <span className="badge rounded-pill text-bg-info">Info</span>
                <span className="badge rounded-pill bg-black text-white">
                  Trauer
                </span>
                <span className="badge rounded-pill text-bg-secondary">
                  Sonstige
                </span>
              </div>
            </span>
          </div>
          <div id="changelog" className="changelog">
            <p>
              Die Website wurde neu designed und ist nun auch für mobile Geräte
              optimiert. Tolle neue Features erwarten dich! Z.b. kannst du nun
              unsere Fahrzeug interaktiv kennenlernen, unsere detailierte
              Einsatzstatistik studieren oder die unsere Veranstallungstermine
              ansehen.
            </p>
            <p>
              Ebenfalls neu ist unser Blog (den du gerade liest). Hier werden
              wir dich über aktuelle Ereignisse informieren. Oder du schaust
              einfach mal auf unseren Social Media Seiten vorbei.
            </p>
            <img src="/fire.png" height={512} width={512} />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h5>Folg uns doch!</h5>
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
    </div>
  );
};

Aktuelles.propTypes = {};

export default Aktuelles;
