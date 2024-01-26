import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Vehicles.scss";

const Vehicle = (props) => {
  const [isLightMode, setIsLightMode] = useState(false);
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

  useEffect(() => {
    // Create a MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      // Removed unused observer parameter
      // Look through all mutations that just occured
      for (let mutation of mutationsList) {
        // If the data-bs-theme attribute was modified
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-bs-theme"
        ) {
          // Update the chart
          const html = document.getElementsByTagName("html")[0];
          const colorMode = html.getAttribute("data-bs-theme");
          setIsLightMode(colorMode == "dark" ? false : true);
        }
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`border rounded-5 d-flex overflow-hidden vehicle_container ${
        isPortrait ? "flex-column" : ""
      }`}
    >
      {isPortrait ? (
        <span
          className={`p-3 d-inline-flex align-items-start justify-content-between text-break border-bottom vehicle_details ${
            isLightMode ? "light" : ""
          }`}
        >
          <span>
            <h1>{props.title}</h1>
            <h4 className="text-primary">{props.callsign}</h4>
          </span>
        </span>
      ) : (
        ""
      )}
      <div
        className={`flex-fill d-flex align-items-center justify-content-center ${
          isPortrait ? "" : "flex-fill"
        }`}
      >
        {props.imgSrc === Vehicle.defaultProps.imgSrc ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="50%"
            className="bi bi-card-image vehicle_img"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
          </svg>
        ) : (
          <img src={props.imgSrc} className="vehicle_img" />
        )}
      </div>
      {isPortrait ? "" : <div className="vr" />}

      {isPortrait ? (
        ""
      ) : (
        <span
          className={`flex-fill p-3 d-inline-flex flex-column overflow-y-auto text-break vehicle_details ${
            isLightMode ? "light" : ""
          }`}
        >
          <h1>{props.title}</h1>
          <h4 className="text-secondary">
            <span className="text-primary">{props.callsign}</span> <br />{" "}
            Besatzung: {props.crew}
          </h4>
          <span className="flex-fill d-flex align-items-center">
            <h5>{props.details}</h5>
          </span>

          <h5 className="text-secondary">
            Indienstellung: <br /> {props.date}
          </h5>
          <h5 className="text-secondary">
            Träger: <br /> {props.carrier}
          </h5>
        </span>
      )}
    </div>
  );
};

Vehicle.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  callsign: PropTypes.string,
  crew: PropTypes.string,
  details: PropTypes.object,
  date: PropTypes.string,
  carrier: PropTypes.string,
};

Vehicle.defaultProps = {
  imgSrc: "default",
  title: "Title",
  callsign: "Funkrufname",
  crew: "Besatzung",
  details: <span>Ausrüstung</span>,
  date: "Indienstellung",
  carrier: "Träger",
};

export default Vehicle;
//
