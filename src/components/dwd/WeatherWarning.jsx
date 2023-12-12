import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "./css/weatherwarnings.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const WeatherWarning = (props) => {
  const headline =
    props.warning != null ? props.warning.headline.split(" ") : [];
  const effective = props.warning != null ? props.warning.effective : "";
  const expires = props.warning != null ? props.warning.expires : "";
  const tooltip = "Ab: " + effective + "</br> Bis: " + expires;

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

  return (
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
          "d-flex rounded bg-secondary-subtle warning  " +
          props.className +
          " " +
          (props.warning == null ? "invisible" : "")
        }
        data-bs-toggle="tooltip"
        data-bs-custom-class="customtooltip"
        data-bs-placement={props.tooltipPosition}
        data-bs-html="true"
        data-bs-title={tooltip}
      >
        {props.warning != null ? (
          <>
            <WarnIcon level={props.warning.level} event={props.warning.event} />

            <span className="d-flex flex-fill align-items-center justify-content-between">
              <span className="d-flex flex-column ps-2 pe-2 fw-semibold justify-content-center">
                <span>{headline.slice(0, 2).join(" ")}</span>
                <span>{headline.slice(2, headline.length + 1).join(" ")}</span>
              </span>
              <img
                className="rounded dwdlogo p-1"
                src={"src/components/dwd/assets/dwd_logo.png"}
                height="50"
              />
            </span>
          </>
        ) : null}
      </div>
    </a>
  );
};

WeatherWarning.propTypes = {
  className: PropTypes.string,
  warning: PropTypes.any,
  tooltipPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  location: PropTypes.string,
};
WeatherWarning.defaultProps = {
  className: "",
  warning: null,
  tooltipPosition: "bottom",
  location: "",
};

export default WeatherWarning;

const WarnIcon = (props) => {
  const icon = {
    wind: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-wind" />
      </span>
    ),
    windböen: (
      <span className="fs-5 position-absolute mt-3">
        <i className="bi bi-wind" />
      </span>
    ),
    sturmböen: (
      <span className="fs-5 position-absolute mt-3">
        <i className="bi bi-wind" />
      </span>
    ),
    schweresturmböen: (
      <span className="fs-5 position-absolute mt-3">
        <i className="bi bi-wind" />
      </span>
    ),
    orkanböen: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-wind" />
      </span>
    ),

    regen: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-cloud-rain-heavy" />
      </span>
    ),

    ergiebigerdauerregen: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-cloud-rain-heavy" />
      </span>
    ),
    gewitter: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-cloud-lightning-rain" />
      </span>
    ),
    nebel: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-cloud-fog2" />
      </span>
    ),
    tornado: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-tornado" />
      </span>
    ),
    schnee: (
      <span className="fs-5 position-absolute mt-3 ">
        <i className="bi bi-cloud-snow" />
      </span>
    ),
    frost: (
      <span className="fs-5 position-absolute mt-3 ms-2">
        <i className="bi bi-thermometer-snow" />
      </span>
    ),
    hitze: (
      <span className="fs-5 position-absolute mt-3 ms-2">
        <i className="bi bi-thermometer-sun" />
      </span>
    ),
    glätte: (
      <span className="fs-5 position-absolute mt-3 pt-1">
        <i className="bi bi-snow3" />
      </span>
    ),
    glatteis: (
      <span className="fs-5 position-absolute mt-3 pt-1">
        <i className="bi bi-snow3" />
      </span>
    ),
  };
  return (
    <div
      className={
        "rounded-start position-relative d-flex flex-column align-items-center warn_" +
        props.level
      }
    >
      {icon[props.event]}
      {props.level > 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
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
  warning: null,
};
