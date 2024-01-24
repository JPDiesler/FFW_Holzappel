import React, { useState } from "react";
import "./Vehicles.scss";
import { tlfw, dlk, hlf, mtf } from "./VehicleFrames";

const Vehicles = () => {
  const vehicles = [tlfw, dlk, hlf, mtf];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextVehicle = () => {
    setActiveIndex((activeIndex + 1) % vehicles.length);
  };

  const prevVehicle = () => {
    setActiveIndex((activeIndex - 1 + vehicles.length) % vehicles.length);
  };

  return (
    <div className="flex-fill d-flex flex-column justify-content-center align-items-center border border-3 border-danger gap-3">
      <h1 className="title">Unsere Einsatzfahrzeuge</h1>
      <div className="d-flex align-items-center">
        <button onClick={prevVehicle}>Prev</button>
        {vehicles[activeIndex]}
        <button onClick={nextVehicle}>Next</button>
      </div>
      <div>
        {vehicles.map((vehicle, index) => (
          <button
            key={index}
            style={{ backgroundColor: index === activeIndex ? "blue" : "gray" }}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
