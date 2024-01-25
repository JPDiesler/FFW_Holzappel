import React, { useState, useEffect } from "react";
import "./Vehicles.scss";
import { tlfw, dlk, hlf, mtf } from "./VehicleFrames";

const Vehicles = () => {
  const vehicles = [tlfw, dlk, hlf, mtf];
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(0);

  console.log("T: " + windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("w: " + window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextVehicle = () => {
    const newIndex = (activeIndex + 1) % vehicles.length;
    setActiveIndex(newIndex);
    if (newIndex != 0) {
      const offset_1 = windowWidth + 1035;
      setOffset(offset - offset_1);
    } else {
      setOffset(0);
    }
  };

  const prevVehicle = () => {
    const offset_1 = windowWidth + 1035;
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = vehicles.length - 1;
      setOffset(-newIndex * offset_1);
    } else {
      setOffset(offset - offset_1);
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="flex-fill d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <h1 className="title">Unsere Einsatzfahrzeuge</h1>
      <div>
        <div className="d-flex align-items-center position-relative">
          <button onClick={prevVehicle} className="btn p-0 pt-5 pb-5 me-3 z-1">
            <i className="bi bi-chevron-compact-left fs-1"></i>
          </button>
          <div className="placeholder z-1">{vehicles[0]}</div>
          <div
            id="carousel-container"
            className="carousel-container"
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 0.75s ease-in-out",
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
