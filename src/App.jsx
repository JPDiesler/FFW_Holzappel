import React from "react";
import "./App.scss";
import DwdWidget from "./components/dwd/DwdWidget";
import Navbar from "./components/navbar/Navbar";
import ModeButton from "./components/modeButton/ModeButton";
import DeploymentStatistics from "./components/deploymentStatistics/DeploymentStatistics";

function App() {
  return (
    <>
      <div id="header" className="">
        <div className="canvas bg-dark d-flex flex-column justify-content-end">
          <div className="flex-fill mt-3 ps-2 pe-2">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col flex-grow-1 d-flex justify-content-start">
                <ModeButton />
              </div>
              <div className="col flex-grow-1">
                <Navbar />
              </div>
              <div className="col flex-grow-1 d-flex justify-content-end">
                <DwdWidget location={"Holzappel"} alwaysVisible={false} />
              </div>
            </div>
          </div>
          <div className="bg-body rounded-top-5 rounded-spacer"></div>
        </div>
      </div>
      <div id="content">
        <div id="aktuelles" className="ms-5 me-5 element">
          <h1>Aktuelles</h1>
        </div>
        <div id="date" className="ms-5 me-5 element">
          <h1>Termine</h1>
        </div>
        <div id="deployment" className="ms-5 me-5 element">
          <h1>Einsätze</h1>
        </div>
        <div id="vehicles" className="ms-5 me-5 element">
          <h1>Fahrzeuge</h1>
        </div>
      </div>
      <div
        id="footer"
        className="border-top border-3 border-danger bg-dark footer d-flex justify-content-between p-2"
      >
        <img src="/vg_diez_logo.svg" height={"90px"} />
      </div>
    </>
  );
}

export default App;
