import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "./deploymentTypes.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TypesAssistance = (props) => {
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
        <i className="fa-solid fa-handshake-angle green cfs-1"></i>
        <span className={`cfs-1 ${props.isPortrait ? "" : "vertical-text"}`}>
          Unterstützung
        </span>
      </div>
      <div className="cfs-5">
        <div className="d-flex border-bottom border-2">
          <div className="border-end d-flex align-items-center justify-content-center step">
            U1
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Lose Objekte</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">Abgebrochener Ast</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">{"Wasser in Gebäude <10cm"}</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Umgestürzter Baum</div>
            </div>
          </div>
        </div>
        <div className="d-flex border-bottom border-2">
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            U2
          </div>
          <div className="flex-fill">
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Übergetretener Bach</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">02</div>
              <div className="ps-2 pe-2">{"Wasser in Gebäude <50cm"}</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">03</div>
              <div className="ps-2 pe-2">Lose Objekte dringend</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">04</div>
              <div className="ps-2 pe-2">Abgebrochener Ast dringend</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">05</div>
              <div className="ps-2 pe-2">{"Wasser in Gebäude >50cm"}</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">06</div>
              <div className="ps-2 pe-2">Überflutete Straße</div>
            </div>
            <div className="d-flex border-bottom ps-2">
              <div className="pe-2 border-end number">07</div>
              <div className="ps-2 pe-2">Umgestürzter Baum dringend</div>
            </div>
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">08</div>
              <div className="ps-2 pe-2">Abgedecktes Dach</div>
            </div>
          </div>
        </div>
        <div
          className={`d-flex ${
            props.isPortrait ? "" : "border-bottom"
          } border-2`}
        >
          <div className="ps-2 pe-2 border-end d-flex align-items-center justify-content-center step">
            U3
          </div>
          <div className="flex-fill">
            <div className="d-flex ps-2">
              <div className="pe-2 border-end number">01</div>
              <div className="ps-2 pe-2">Hangrutsch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TypesAssistance.propTypes = { isPortrait: PropTypes.bool };
TypesAssistance.defaultProps = { isPortrait: false };

export default TypesAssistance;
