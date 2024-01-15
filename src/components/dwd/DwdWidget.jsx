import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./css/weatherwarnings.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getDWDWarnings } from "./src/dwd";

const WeatherWarning = (props) => {
  const [warning, setWarning] = useState(null);
  const [headline, setHeadline] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  //Update tooltip position
  useEffect(() => {
    // Get all elements with data-bs-toggle="tooltip"
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    // Initialize tooltips for each element
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    // Cleanup when the component is unmounted
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, [tooltip, props.tooltipPosition]);

  async function fetchWarning(location) {
    console.log("Fetching...");
    try {
      const warnings = await getDWDWarnings(location);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Fetching complete! " + warnings.length + " Warnings found");
      if (warnings.length > 0) {
        const warning = warnings[0];
        setHeadline(warning?.headline.split(" "));
        setTooltip(
          "Ab: " + warning?.effective + "</br> Bis: " + warning?.expires
        );
        setWarning(warning);
      } else {
        setWarning(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  //Get DWD warnings & update accordingly
  useEffect(() => {
    fetchWarning(props.location);
    const interval = setInterval(() => {
      fetchWarning(props.location);
    }, props.interval);
    return () => clearInterval(interval);
  }, [props.location, props.interval]);

  return (
    <div
      className={warning == false && !props.alwaysVisible ? "invisible" : ""}
    >
      <a
        className="text-decoration-none text-white"
        href={
          "https://www.dwd.de/DE/wetter/warnungen/warnWetter_node.html?ort=" +
          props.location
        }
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            "d-flex rounded warning  " +
            (warning ? "pulsate" : "") +
            props.className
          }
          data-bs-toggle={warning ? "tooltip" : ""}
          data-bs-custom-class="customtooltip"
          data-bs-placement={props.tooltipPosition}
          data-bs-html="true"
          data-bs-title={tooltip}
        >
          <WarnIcon
            level={warning ? warning.level : warning == false ? 0 : undefined}
            event={
              warning
                ? warning.event
                : warning == false
                ? "nowarning"
                : undefined
            }
          />
          {warning ? (
            <span className="d-flex flex-fill align-items-center justify-content-between">
              <span className="d-flex flex-column ps-1 pe-1 fw-semibold justify-content-center">
                <span>{headline.slice(0, 2).join(" ")}</span>
                <span>{headline.slice(2, headline.length + 1).join(" ")}</span>
              </span>
              <img
                className="rounded dwdlogo p-1"
                src={"src/components/dwd/assets/dwd_logo.png"}
                height="40"
              />
            </span>
          ) : warning == false ? (
            <span className="d-flex flex-fill align-items-center justify-content-between">
              <span className="d-flex flex-fill ps-1 pe-1 fw-semibold justify-content-center">
                Keine Warnungen
              </span>
              <img
                className="rounded dwdlogo p-1"
                src={"src/components/dwd/assets/dwd_logo.png"}
                height="40"
              />
            </span>
          ) : (
            <span className="d-flex gap-2 align-items-center fw-semibold  justify-content-center flex-fill">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              Laden...
            </span>
          )}
        </div>
      </a>
    </div>
  );
};

WeatherWarning.propTypes = {
  className: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  location: PropTypes.string,
  interval: PropTypes.number,
  alwaysVisible: PropTypes.bool,
};
WeatherWarning.defaultProps = {
  className: "",
  tooltipPosition: "bottom",
  location: "",
  interval: 3000000,
  alwaysVisible: true,
};

export default WeatherWarning;

const WarnIcon = (props) => {
  const icon = {
    loading: (
      <span className="flex-fill d-flex align-items-center">
        {/* <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
      </span>
    ),
    nowarning: (
      <span className="fs-3 flex-fill d-flex align-items-center">
        <i className="bi bi-check-lg" />
      </span>
    ),
    windböen: (
      <span className=" position-absolute mt-2 pt-1">
        <i className="bi bi-wind" />
      </span>
    ),
    sturmböen: (
      <span className=" position-absolute mt-2 pt-1">
        <i className="bi bi-wind" />
      </span>
    ),
    schweresturmböen: (
      <span className=" position-absolute mt-2 pt-1">
        <i className="bi bi-wind" />
      </span>
    ),
    orkanartigeböen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-wind" />
      </span>
    ),
    orkanböen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-wind" />
      </span>
    ),
    extremeorkanböen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-wind" />
      </span>
    ),

    starkregen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-rain-heavy" />
      </span>
    ),
    heftigerstarkregen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-rain-heavy" />
      </span>
    ),
    extremheftigerstarkregen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-rain-heavy" />
      </span>
    ),
    dauerregen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-rain" />
      </span>
    ),
    ergiebigerdauerregen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-rain" />
      </span>
    ),
    extremergiebigerdauerregen: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-rain" />
      </span>
    ),
    gewitter: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-lightning-rain" />
      </span>
    ),
    starkesgewitter: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-lightning-rain" />
      </span>
    ),
    schweregewitter: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-lightning-rain" />
      </span>
    ),
    extremesgewitter: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-lightning-rain" />
      </span>
    ),
    nebel: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-fog2" />
      </span>
    ),
    tornado: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-tornado" />
      </span>
    ),
    leichterschneefall: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    schneefall: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    starkerschneefall: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    extremstarkerschneefall: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    schneeverwehung: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    starkeschneeverwehung: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    extremstarkeschneeverwehung: (
      <span className=" position-absolute mt-2 pt-1 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    frost: (
      <span className=" position-absolute mt-2 pt-1 ms-2">
        <i className="bi bi-thermometer-snow" />
      </span>
    ),
    strengerfrost: (
      <span className=" position-absolute mt-2 pt-1 ms-2">
        <i className="bi bi-thermometer-snow" />
      </span>
    ),
    starkewärmebelastung: (
      <span className=" position-absolute mt-2 pt-1 ms-2">
        <i className="bi bi-thermometer-sun" />
      </span>
    ),
    extremwärmebelastung: (
      <span className=" position-absolute mt-2 pt-1 ms-2">
        <i className="bi bi-thermometer-sun" />
      </span>
    ),
    geringeglätte: (
      <span className=" position-absolute mt-2 pt-1 pt-1">
        <i className="bi bi-snow3" />
      </span>
    ),
    glätte: (
      <span className=" position-absolute mt-2 pt-1 pt-1">
        <i className="bi bi-snow3" />
      </span>
    ),
    glatteis: (
      <span className=" position-absolute mt-2 pt-1 pt-1">
        <i className="bi bi-snow3" />
      </span>
    ),
    extremesglatteis: (
      <span className=" position-absolute mt-2 pt-1 pt-1">
        <i className="bi bi-snow3" />
      </span>
    ),
    tauwetter: (
      <span className=" position-absolute mt-2 pt-1 pt-1">
        <i className="bi bi-droplet" />
      </span>
    ),
    starkestauwetter: (
      <span className=" position-absolute mt-2 pt-1 pt-1">
        <i className="bi bi-droplet" />
      </span>
    ),
    erhöhteuvintensität: (
      <span className=" position-absolute mt-2 pt-1 pt-1">
        <i className="bi bi-sun" />
      </span>
    ),
  };

  return (
    <div
      className={
        "rounded-start d-flex flex-column align-items-center warnicon warn_" +
        props.level
      }
    >
      {icon[props.event]}
      {props.event != "nowarning" && props.event != "loading" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-triangle"
          viewBox="0 0 16 16"
        >
          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
        </svg>
      ) : null}
    </div>
  );
};
WarnIcon.propTypes = {
  level: PropTypes.number,
  event: PropTypes.string,
};
WarnIcon.defaultProps = {
  level: -1,
  event: "loading",
};
