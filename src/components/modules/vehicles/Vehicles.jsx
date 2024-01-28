import React, { useState, useEffect, useRef } from "react";
import "./Vehicles.scss";
import Vehicle from "./Vehicle";

const tlfw_details = (
  <>
    <span>3000L Wassertank</span>
    <span>Dachwasserwerfer</span>
    <span> Frontsprühbalken</span>
    <span>Truppkabine</span>
    <span>Allradantrieb</span>
  </>
);

const tlfw = (
  <Vehicle
    imgSrc="./TLF_3000.png"
    title="TLF-3000"
    callsign="Florian Diez 15/23-2"
    crew="1/2"
    details={tlfw_details}
    date="07.10.2023"
    carrier="Rhein-Lahn-Kreis"
  />
);

const dlk_details = (
  <>
    500KG Korb <br />
    27m Leiterpark <br />
    Truppkabine
  </>
);

const dlk = (
  <Vehicle
    imgSrc="./DLK.png"
    title="DLK-18/12"
    callsign="Florian Diez 15/33"
    crew="1/2"
    details={dlk_details}
    date="11.06.2022"
    carrier="VG Diez"
  />
);

const hlf_details = (
  <>
    2500L Wassertank <br />
    TH-Ausrüstung <br />
    Gruppenkabine <br /> Allradantrieb
  </>
);

const hlf = (
  <Vehicle
    imgSrc="./TLF_1625.png"
    title="TLF-16/25"
    callsign="Florian Diez 15/23-1"
    crew="1/8"
    details={hlf_details}
    date="20.12.2005"
    carrier="VG Diez"
  />
);

const mtf_details = (
  <>
    GAMS+ Satz <br /> Taktikboard <br /> Wasserrettungssatz <br /> Pavillion
  </>
);
const mtf = (
  <Vehicle
    title="MTF"
    callsign="Florian Diez 15/19"
    crew="1/8"
    details={mtf_details}
    date="28.04.2011"
    carrier="VG Diez"
  />
);

const vehicles = [tlfw, dlk, hlf, mtf];

const Vehicles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const activeIndexRef = useRef(activeIndex);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const handleResize = () => {
      const vehicleContainer = document.querySelector(".vehicle_container");
      let width = vehicleContainer.getBoundingClientRect().width;
      if (width < 700) {
        width = 700;
      }
      const newOffset =
        activeIndexRef.current *
        (window.innerWidth + width); /* your calculation */
      setOffset(-newOffset);
    };

    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //const vwToPx = (vw) => (vw / 100) * window.innerWidth;

  /* const changeSlide(activeIndex+1) = () => {
    const newIndex = (activeIndex + 1) % vehicles.length;
    if (newIndex != 0) {
      const vehicleContainer = document.querySelector(".vehicle_container");
      const width = vehicleContainer.getBoundingClientRect().width;
      const offset_1 = window.innerWidth + width;
      setOffset(offset - offset_1);
    } else {
      setOffset(0);
    }
    setActiveIndex(newIndex);
  };

  const prevVehicle = () => {
    const vehicleContainer = document.querySelector(".vehicle_container");
    const width = vehicleContainer.getBoundingClientRect().width;
    const offset_1 = window.innerWidth + width;
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = vehicles.length - 1;
      setOffset(-newIndex * offset_1);
    } else {
      setOffset(offset + offset_1);
    }
    setActiveIndex(newIndex);
  }; */

  const changeSlide = (newIndex) => {
    const vehicleContainer = document.querySelector(".vehicle_container");

    if (vehicleContainer) {
      const width = vehicleContainer.getBoundingClientRect().width;
      const offset_1 = window.innerWidth + width;

      if (newIndex >= vehicles.length) {
        // If newIndex is greater than vehicles.length - 1, wrap around to the start of the list
        newIndex = 0;
        setOffset(0);
      } else if (newIndex < 0) {
        // If newIndex is less than 0, wrap around to the end of the list
        newIndex = vehicles.length - 1;
        setOffset(-newIndex * offset_1);
      } else if (newIndex > activeIndex) {
        // next direction
        setOffset(offset - offset_1);
      } else if (newIndex < activeIndex) {
        // prev direction
        setOffset(offset + offset_1);
      }

      setActiveIndex(newIndex);
    }
  };

  const jumpToSlide = (index) => {
    const vehicleContainer = document.querySelector(".vehicle_container");

    if (vehicleContainer) {
      const width = vehicleContainer.getBoundingClientRect().width;
      const offset_1 = window.innerWidth + width;

      if (index >= 0 && index < vehicles.length) {
        setOffset(-index * offset_1);
        setActiveIndex(index);
      }
    }
  };

  return (
    <div className="flex-fill d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <h1 className="title mb-5">Unsere Einsatzfahrzeuge</h1>
      <div className="mt-5">
        <div className="d-flex align-items-center position-relative">
          {isPortrait ? (
            ""
          ) : (
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="btn p-0 pt-5 pb-5 me-3 z-1"
            >
              <i className="bi bi-chevron-compact-left fs-1"></i>
            </button>
          )}

          <div className="placeholder z-1">{vehicles[0]}</div>
          <div
            id="carousel-container"
            className="carousel-container"
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 0.75s ease-in-out",
            }}
          >
            {isPortrait ? (
              ""
            ) : (
              <button
                className="btn p-0 pt-5 pb-5 me-3 placeholder"
                disabled={true}
              >
                <i className="bi bi-chevron-compact-left fs-1"></i>
              </button>
            )}

            {vehicles.map((vehicle, index) => {
              return <div key={index}>{vehicle}</div>;
            })}
          </div>
          {isPortrait ? (
            ""
          ) : (
            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="btn p-0 pt-5 pb-5 ms-3 z-1"
            >
              <i className="bi bi-chevron-compact-right fs-1"></i>
            </button>
          )}
        </div>
        <div className="flex-fill d-flex justify-content-center align-items-center p-2 pt-3 pb-4">
          {isPortrait ? (
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="btn p-2 me-3 z-1"
            >
              <i className="bi bi-chevron-compact-left fs-1"></i>
            </button>
          ) : (
            ""
          )}
          {vehicles.map((vehicle, index) => (
            <button
              key={index}
              className={`indicator ${
                index === activeIndex ? "indicator_active " : ""
              }`}
              onClick={() => jumpToSlide(index)}
            ></button>
          ))}
          {isPortrait ? (
            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="btn p-1 ms-3 z-1"
            >
              <i className="bi bi-chevron-compact-right fs-1"></i>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
