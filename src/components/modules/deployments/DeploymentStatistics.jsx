import React, { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import "./deployments.scss";
import deployment_data from "./deployments_data";
import DeploymentChart from "./DeploymentChart";
import DeploymentTable from "./DeploymentTable";
import ButtonBar from "./ButtonBar";

const DeploymentStatistics = forwardRef((props, ref) => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    //toggle portrait mode
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const action = (
    <div className="mt-3 d-flex justify-content-center">
      <span
        className="icon-link icon-link-hover text-primary text-decoration-underline pointer fs-6 hover-animation"
        onClick={() => props.onClickAction()}
      >
        Erfahre mehr über die Alarmstichwort & Codes
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right fs-4"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </span>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`flex-fill d-flex justify-content-center align-items-center ${props.className}`}
    >
      <div>
        <h1 className="title mb-5  d-flex justify-content-center">
          Einsatzstatistik
        </h1>
        <div className="flex-fill d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <DeploymentChart data={deployment_data[year]} year={year} />
          <DeploymentTable data={deployment_data[year]} />
        </div>
        {!isPortrait ? action : null}
        <ButtonBar
          className="mt-3"
          selectedYear={year}
          years={Object.keys(deployment_data)}
          setYear={setYear}
          portraitMode={isPortrait}
        />
        {isPortrait ? action : null}
      </div>
    </div>
  );
});

DeploymentStatistics.displayName = "DeploymentStatistics";

DeploymentStatistics.propTypes = {
  className: PropTypes.string,
  onClickAction: PropTypes.func,
};
DeploymentStatistics.defaultProps = {
  className: "",
  onClickAction: () => console.log("Action clicked"),
};

export default DeploymentStatistics;
