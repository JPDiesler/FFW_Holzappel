import React from "react";
import Map from "../../map/Map";
import "./Recruting.scss";

const Recruting = () => {
  return (
    <div
      id="recruting"
      className={"element d-flex flex-wrap align-items-center "}
    >
      <div className="flex-fill min-width">Recruting</div>
      <div className="map_container z-3">
        <Map />
      </div>
    </div>
  );
};

export default Recruting;
