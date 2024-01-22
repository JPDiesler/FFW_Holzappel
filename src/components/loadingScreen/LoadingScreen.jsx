import React, { useState, useEffect } from "react";
import "./LoadingScreen.scss";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const duration = 1.5;
    const increment = 100 / (duration * 100);

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + increment, 100);
        if (newProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setTimeout(setIsLoaded(true), 100);
            setTimeout(onLoadingComplete, 1000); // Delay the call to onLoadingComplete
          }, 250);
        }
        return newProgress;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isLoaded ? "loaded" : ""}`}>
      <div className="progress-bar-container">
        <div className="progress-bar" />
      </div>
      <h1 className="progress-text">{Math.round(progress)}</h1>
    </div>
  );
};

export default LoadingScreen;
