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
    <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
      <h1 className="title">Unsere Einsatzfahrzeuge</h1>
      <div>
        <div className="d-flex align-items-center position-relative border">
          <button onClick={prevVehicle} className="btn p-0 pt-5 pb-5 me-3 z-1">
            <i className="bi bi-chevron-compact-left fs-1"></i>
          </button>
          <div className="placeholder z-1">{vehicles[0]}</div>
          <div
            id="carousel-container"
            className="carousel-container border border-primary"
            style={{
              transform: `translateX(-${activeIndex * 100}vw)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <button
              onClick={prevVehicle}
              className="btn p-0 pt-5 pb-5 me-3 placeholder"
              disabled={true}
            >
              <i className="bi bi-chevron-compact-left fs-1"></i>
            </button>
            {vehicles.map((vehicle) => {
              return vehicle;
            })}
          </div>
          {/* {vehicles[activeIndex]} */}
          <button onClick={nextVehicle} className="btn p-0 pt-5 pb-5 ms-3 z-1">
            <i className="bi bi-chevron-compact-right fs-1"></i>
          </button>
        </div>
        <div className="flex-fill d-flex justify-content-center align-items-centerp-2 pt-3 pb-4">
          {vehicles.map((vehicle, index) => (
            <button
              key={index}
              className={`indicator ${
                index === activeIndex ? "indicator_active " : ""
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
