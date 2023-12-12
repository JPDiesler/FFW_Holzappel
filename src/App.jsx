import React from "react";
import "./App.scss";
import DwdWidget from "./components/dwd/DwdWidget";
import Navbar from "./components/navbar/Navbar";
import SplineCanvas from "./components/splineCanvas/SplineCanvas";
import DeploymentStatistics from "./components/deploymentStatistics/DeploymentStatistics";

function App() {
  return (
    <div className="">
      <span className="position-absolute canvas">
        <SplineCanvas />
      </span>
      <span className="z-1">
        <DwdWidget location="Titisee-Neustadt" interval={300000} />
        <DeploymentStatistics />
      </span>
    </div>
  );
}

export default App;
