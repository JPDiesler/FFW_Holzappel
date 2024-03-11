import React from "react";
import { useState, useEffect, useRef } from "react";
import "./deploymentTypes.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TypesWater = () => {
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
        <i className="fa-solid fa-water dark-blue cfs-1"></i>
        <span className="vertical-text cfs-1">Wasser</span>
      </div>
      <div className="cfs-5">
        <div className="d-flex border-bottom border-2">
          <div className="border-end d-flex align-items-center justify-content-center step">
            W1
          </div>
          <div className="flex-fill">
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Hochwasser</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            W2
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Wasser-/Eisrettung</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Taucheinsatz</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Bootsunfall</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Öl auf Gewässer</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            W3
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Schiffsbrand</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Schiffsharvarie</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Wasser-/Eisrettung groß</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesWater;
