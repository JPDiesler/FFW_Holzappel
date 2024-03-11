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
        <i className="fa-solid fa-circle-exclamation violet cfs-1"></i>
        <span className="vertical-text cfs-1">Unterstützung</span>
      </div>
      <div className="cfs-5">
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            S1
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Einsatz nach Rücksprache</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Bombenfund</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Bombendrohung</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">05</div>
              <div className="ps-2 pe-2">Personensuche</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">07</div>
              <div className="ps-2 pe-2">Stromausfall</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">08</div>
              <div className="ps-2 pe-2">Amok</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">09</div>
              <div className="ps-2 pe-2">Erkundung</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">14</div>
              <div className="ps-2 pe-2">Hubschrauberlandung</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            S2
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Flugzeugunfall klein</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Unwetter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesFire;
