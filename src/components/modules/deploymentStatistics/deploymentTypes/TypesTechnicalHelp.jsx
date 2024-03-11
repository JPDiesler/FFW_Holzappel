import React from "react";
import { useState, useEffect, useRef } from "react";
import "./deploymentTypes.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TypesTechnicalHelp = () => {
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
        <i className="fa-solid fa-car-burst blue cfs-1"></i>
        <span className="vertical-text cfs-1">Hilfeleistung</span>
      </div>
      <div className="cfs-5">
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step ">
            H1
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Türöffnung</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Absicherung</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Insekten</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Tierbergung</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">05</div>
              <div className="ps-2 pe-2">Tierrettung</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">06</div>
              <div className="ps-2 pe-2">Person im Aufzug</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">07</div>
              <div className="ps-2 pe-2">Tragehilfe Rettungsdienst</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">08</div>
              <div className="ps-2 pe-2">Wasser im Gebäude</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step ">
            H2
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Türöffnung dringend</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Leichenbergung</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Verkehrsunfall</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Person in Zwangslage</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">05</div>
              <div className="ps-2 pe-2">Person droht zu springen</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">06</div>
              <div className="ps-2 pe-2">Einsturz</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">07</div>
              <div className="ps-2 pe-2">Hilfeleistung groß</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">08</div>
              <div className="ps-2 pe-2">Tragehilfe Rettungsdienst mit DLK</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step ">
            H3
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Verkehrsunfall groß</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Höhen-/Tiefenrettung</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Einstruz groß</div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step ">
            H4
          </div>
          <div className="flex-fill d-flex align-items-stretch">
            <div className="felx-fill d-flex align-items-stretch ps-2">
              <div className="pe-2 border-end number d-flex align-items-center">
                01
              </div>
              <div className="ps-2 pe-2 d-flex align-items-center">
                Massenanfall von Verletzten
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesTechnicalHelp;
