import React from "react";
import Map from "../../map/Map";

const Recruting = () => {
  return (
    <div
      id="recruting"
      className={"element d-flex flex-wrap align-items-center "}
    >
      <div className="flex-fill min-width">Recruting</div>
      <div className="map min-width z-3">
        <Map />
      </div>
    </div>
  );
};

export default Recruting;
