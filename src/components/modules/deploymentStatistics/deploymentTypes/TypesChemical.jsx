import React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./deploymentTypes.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TypesChemical = (props) => {
  const [open, setOpen] = useState(false);
  const [contentSize, setContentSize] = useState({
    width: "80px",
    height: "80px",
  });
  const divRef = useRef(null);

  useEffect(() => {
    if (open) {
      const size = {
        width: `${divRef.current.scrollWidth}px`,
        height: `${divRef.current.scrollHeight}px`,
      };
      setContentSize(size);
    }
  }, [open]);

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div
      className={`d-flex rounded border border-2  fw-semibold text-nowrap ${
        props.isPortrait
          ? "flex-column " + (open ? "p-open" : "p-closed")
          : open
          ? "f-open"
          : "f-closed"
      }`}
      ref={divRef}
      style={
        props.isPortrait
          ? { height: open ? contentSize.height : "80px" }
          : { width: open ? contentSize.width : "80px" }
      }
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`d-flex align-items-center justify-content-start gap-2 p-2 border-2 ${
          props.isPortrait
            ? "flex-row border-bottom"
            : "flex-column border-end "
        }`}
      >
        <i className="fa-solid fa-biohazard yellow cfs-1"></i>
        <span className={`cfs-1 ${props.isPortrait ? "" : "vertical-text"}`}>
          Gefahrstoff
        </span>
      </div>
      <div className="cfs-5">
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            G1
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Ölspur</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Auslaufende Betriebsstoffe PKW</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Sonstige Kleinmengen</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">04</div>
              <div
                className="ps-2 pe-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Allg. Einsatzplan Gefahsstoffgüter 1"
              >
                AEP GSG 1
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            G2
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Auslaufende Betriebsstoffe LKW</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div
                className="ps-2 pe-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Allg. Einsatzplan Gefahsstoffgüter 2"
              >
                AEP GSG 2
              </div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Gasgeruch</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            G3
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div
                className="ps-2 pe-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Allg. Einsatzplan Gefahsstoffgüter 3"
              >
                AEP GSG 3
              </div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Gefahrstoffaustritt</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Gasausströmung</div>
            </div>
          </div>
        </div>
        <div
          className={`d-flex ${
            props.isPortrait ? "" : "border-bottom"
          } border-2`}
        >
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            G4
          </div>
          <div className="flex-fill d-flex align-items-center">
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">01</div>
              <div
                className="ps-2 pe-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Allg. Einsatzplan Gefahsstoffgüter 4"
              >
                AEP GSG 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TypesChemical.propTypes = { isPortrait: PropTypes.bool };
TypesChemical.defaultProps = { isPortrait: false };

export default TypesChemical;
