import React from "react";
import "./App.scss";
import { useEffect, useState } from "react";
import DwdWidget from "./components/dwd/DwdWidget";
import Navbar from "./components/navbar/Navbar";
import ModeButton from "./components/modeButton/ModeButton";
import DeploymentStatistics from "./components/modules/deploymentStatistics/DeploymentStatistics";
import Aktuelles from "./components/modules/aktuelles/Aktuelles";
import Map from "./components/map/Map";
import Vehicles from "./components/modules/vehicles/Vehicles";
import NavbarMobile from "./components/navbar/NavbarMobile";

function App() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isPortrait ? (
        <>
          <div className="canvas d-flex flex-column justify-content-end position-relative">
            <div className="z-1 flex-fill d-flex justify-content-center mt-3">
              <DwdWidget location={"Holzappel"} alwaysVisible={false} />
            </div>
            <div className="position-absolute path z-0">
              <img
                src="/Unbenannt.png"
                width={"30%"}
                className="logo translate-middle"
              />
            </div>
            <div className="bg-body d-flex flex-column align-items-center rounded-top-5 rounded-spacer z-0 position-relative">
              <h5 className="fw-semibold m-0 mt-2">Scrollen</h5>
              <i className="position-absolute mt-4 fs-5 bi bi-chevron-compact-down m-0"></i>
            </div>
            <div
              className="navball"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              <i className="bi bi-list"></i>
            </div>

            <div
              className="offcanvas offcanvas-bottom menu-height border-0 rounded-top-5 menu"
              tabIndex="-1"
              id="offcanvasBottom"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div className="offcanvas-header">
                <h1 className="menu-title" id="offcanvasBottomLabel">
                  Menü
                </h1>
              </div>
              <div className="offcanvas-body">
                <div className="d-flex flex-column justifiy-content-center align-items-center">
                  <NavbarMobile />

                  <button
                    type="button"
                    className="btn fs-1 close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div id="header" className="">
          <div className="canvas d-flex flex-column justify-content-end position-relative">
            <div className="position-absolute path z-0">
              <img
                src="/Unbenannt.png"
                width={"30%"}
                className="logo translate-middle"
              />
            </div>
            <div className="flex-fill d-flex flex-column mt-3 ps-3 pe-3">
              <div
                id="topbar"
                className="row d-flex justify-content-between align-items-center gap-3"
              >
                <div className="col flex-grow-1 d-flex justify-content-start">
                  <ModeButton />
                </div>
                <div className="col flex-grow-1 z-1">
                  <Navbar />
                </div>
                <div className="col flex-grow-1 d-flex justify-content-end z-1">
                  <DwdWidget location={"Holzappel"} alwaysVisible={false} />
                </div>
              </div>
            </div>
            <div className="bg-body d-flex flex-column align-items-center rounded-top-5 rounded-spacer z-0 position-relative">
              <h5 className="fw-semibold m-0 mt-2">Scrollen</h5>
              <i className="position-absolute mt-4 fs-5 bi bi-chevron-compact-down m-0"></i>
            </div>
          </div>
        </div>
      )}

      <div id="content">
        <div
          id="landing"
          className="element border d-flex flex-wrap align-items-center m-5"
        >
          <div className="flex-fill min-width">Test</div>
          <div className="map min-width">
            <Map />
          </div>
        </div>
        <div id="aktuelles" className="element border m-5"></div>
        <div id="date" className="element border m-5"></div>
        <div id="depolyments" className="element border m-5"></div>
        <div id="vehicles" className="element border m-5 pt-5 pb-5">
          <Vehicles />
        </div>
      </div>
    </>
  );
}

export default App;
