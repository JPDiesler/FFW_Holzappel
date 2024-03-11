import React from "react";
import { useState, useEffect, useRef } from "react";
import "./deploymentTypes.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TypesFire = () => {
  const [open, setOpen] = useState(false);
  const [openWidth, setOpenWidth] = useState("80px");
  const divRef = useRef(null);

  useEffect(() => {
    if (open) {
      setOpenWidth(`${divRef.current.scrollWidth}px`);
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
        open ? "open" : "closed"
      }`}
      ref={divRef}
      style={{ width: open ? openWidth : "80px" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`d-flex flex-column align-items-center justify-content-start gap-2 p-2 border-end border-2`}
      >
        <i className="fa-solid fa-biohazard yellow cfs-1"></i>
        <span className="vertical-text cfs-1">Gefahrstoff</span>
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
        <div className="d-flex border-bottom border-2">
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

export default TypesFire;
