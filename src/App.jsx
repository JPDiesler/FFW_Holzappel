import React from "react";
import "./App.scss";
import DwdWidget from "./components/dwd/DwdWidget";
import Navbar from "./components/navbar/Navbar";
import SplineCanvas from "./components/splineCanvas/SplineCanvas";
import DeploymentStatistics from "./components/deploymentStatistics/DeploymentStatistics";

function App() {
  return (
    <div className="p-5">
      <DwdWidget location="München" interval={300000} />
    </div>
  );
}

export default App;
