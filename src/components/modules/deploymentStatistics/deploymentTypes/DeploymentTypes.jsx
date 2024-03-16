import React, { useState, useEffect } from "react";
import "./deploymentTypes.scss";
import PropTypes from "prop-types";
import TypesFire from "./TypesFire";
import TypesTechnicalHelp from "./TypesTechnicalHelp";
import TypesChemical from "./TypesChemical";
import TypesWater from "./TypesWater";
import TypesAssitance from "./TypesAssistance";
import TypesSpecial from "./TypesSpecial";

const DeploymentTypes = React.forwardRef((props, ref) => {
  const [isPortrait, setIsPortrait] = useState(props.portraitMode);

  useEffect(() => {
    const handleResize = () => {
      if (!props.portraitMode) {
        setIsPortrait(window.innerHeight > window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`vw-90 d-flex flex-column align-items-center ${
        isPortrait ? "justify-content-start" : "justify-content-center"
      }`}
      id="deployment-types"
    >
      <div
        className={`w-100 position-relative d-flex align-items-center justify-content-center ${
          isPortrait ? "mb-5" : "mt-5 mb-5"
        }`}
      >
        {isPortrait ? null : (
          <button
            className="position-absolute top-50 start-0 translate-middle btn fs-4 me-auto"
            onClick={() => props.onClickClose()}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
        )}

        <span className="title fw-semibold ms-3 d-flex justify-content-center">
          Einsatzstichworte RLP&#8209;RLK&#8209;DIEZ
        </span>
      </div>
      <div
        className={`d-flex justify-content-center ${
          isPortrait
            ? "flex-column align-items-center d-inline-flex gap-2"
            : "gap-5"
        }`}
      >
        <TypesFire isPortrait={isPortrait} />
        <TypesTechnicalHelp isPortrait={isPortrait} />
        <TypesChemical isPortrait={isPortrait} />
        <TypesWater isPortrait={isPortrait} />
        <TypesAssitance isPortrait={isPortrait} />
        <TypesSpecial isPortrait={isPortrait} />
      </div>
      {isPortrait ? (
        <button
          className="mt-5 btn btn-outline-dark fs-5 d-flex gap-2 align-items-center"
          onClick={() => props.onClickClose()}
        >
          <i className="bi bi-x-lg"></i>
          Schließen
        </button>
      ) : null}
    </div>
  );
});

DeploymentTypes.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  portraitMode: PropTypes.bool,
};
DeploymentTypes.displayName = "DeploymentTypes";
DeploymentTypes.defaultProps = { portraitMode: false };

export default DeploymentTypes;
