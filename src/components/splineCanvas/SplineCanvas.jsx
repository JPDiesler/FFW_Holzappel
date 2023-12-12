import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const SplineCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/BfSictNhnSsjruaW/scene.splinecode");

    // You may want to add more logic or event listeners here if needed

    // Cleanup function
    return () => {
      // Perform cleanup if necessary (e.g., remove event listeners)
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <canvas ref={canvasRef} id="canvas3d" />;
};

export default SplineCanvas;
