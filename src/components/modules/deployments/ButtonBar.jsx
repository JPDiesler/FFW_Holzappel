import React from "react";
import PropTypes from "prop-types";

const ButtonBar = (props) => {
  const firstYear = props.years[0];
  function generatePreviousYearsButtons() {
    let d = 0;
    const currentYear = new Date().getFullYear();
    const delta = currentYear - props.selectedYear;
    if (delta >= 2) {
      d = 2;
    } else {
      d = 4 - delta;
    }
    const buttons = [];
    for (let i = 1; i <= d; i++) {
      if (props.selectedYear - i < firstYear) break;
      buttons.unshift(
        <button
          key={i}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.setYear(props.selectedYear - i);
          }}
        >
          {props.selectedYear - i}
        </button>
      );
    }
    return buttons;
  }

  function generateNextYearsButtons() {
    let d = 0;
    const delta = props.selectedYear - firstYear;
    if (delta >= 2) {
      d = 2;
    } else {
      d = 4 - delta;
    }
    const buttons = [];
    for (let i = 1; i <= d; i++) {
      if (props.selectedYear + i > new Date().getFullYear()) break;
      buttons.push(
        <button
          key={i}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.setYear(props.selectedYear + i);
          }}
        >
          {props.selectedYear + i}
        </button>
      );
    }
    return buttons;
  }

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${props.className}`}
    >
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={
            props.selectedYear == firstYear
              ? "btn btn-primary"
              : "btn btn-primary"
          }
          onClick={() => {
            props.setYear(firstYear);
          }}
          disabled={props.selectedYear == firstYear}
        >
          <i className="bi bi-chevron-double-left"></i>
        </button>

        <button
          type="button"
          className={
            props.selectedYear == firstYear
              ? "btn btn-primary"
              : "btn btn-primary"
          }
          onClick={() => {
            props.setYear(props.selectedYear - 1);
          }}
          disabled={props.selectedYear == firstYear}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        {!props.portraitMode ? generatePreviousYearsButtons() : null}
        <button type="button" className="pe-none btn btn-primary">
          {props.selectedYear}
        </button>
        {!props.portraitMode ? generateNextYearsButtons() : null}
        <button
          type="button"
          className={
            props.selectedYear == new Date().getFullYear()
              ? "btn btn-primary"
              : "btn btn-primary"
          }
          onClick={() => {
            props.setYear(props.selectedYear + 1);
          }}
          disabled={props.selectedYear == new Date().getFullYear()}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
        <button
          type="button"
          className={
            props.selectedYear == new Date().getFullYear()
              ? "btn btn-primary"
              : "btn btn-primary"
          }
          onClick={() => {
            props.setYear(new Date().getFullYear());
          }}
          disabled={props.selectedYear == new Date().getFullYear()}
        >
          <i className="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </div>
  );
};

ButtonBar.propTypes = {
  className: PropTypes.string,
  years: PropTypes.array.isRequired,
  selectedYear: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
  portraitMode: PropTypes.bool,
};

export default ButtonBar;
