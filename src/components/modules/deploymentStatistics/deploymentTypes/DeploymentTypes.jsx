import React from "react";
import "./deploymentTypes.scss";
import PropTypes from "prop-types";
import TypesFire from "./TypesFire";
import TypesTechnicalHelp from "./TypesTechnicalHelp";
import TypesChemical from "./TypesChemical";
import TypesWater from "./TypesWater";
import TypesAssitance from "./TypesAssistance";
import TypesSpecial from "./TypesSpecial";

const DeploymentTypes = (props) => {
  return (
    <div className="vw-90 vh-100 p-5">
      <div className="position-relative d-flex align-items-center justify-content-center mt-5 mb-5">
        <button
          className="position-absoulte btn fs-4 me-auto"
          onClick={() => props.onClickClose()}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <span className="fw-semibold fs-3 me-auto">
          Einsatzstichworte RLP-RLK-DIEZ
        </span>
      </div>
      <div className="d-flex gap-5 justify-content-center">
        <TypesFire />
        <TypesTechnicalHelp />
        <TypesChemical />
        <TypesWater />
        <TypesAssitance />
        <TypesSpecial />
      </div>
    </div>
  );
};

DeploymentTypes.propTypes = {
  onClickClose: PropTypes.func.isRequired,
};

export default DeploymentTypes;
