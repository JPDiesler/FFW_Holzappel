import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useCookies } from "react-cookie";
import "./Vehicles.scss";

const Vehicle = (props) => {
  const [cookies, setCookie] = useCookies(["theme"]);
  const [isLightMode, setIsLightMode] = useState(true);
  const [divWidth, setDivWidth] = useState(0);
  const divRef = useRef(null);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    // Load the mode from the cookie when the component mounts
    const savedMode = cookies.theme;
    if (savedMode) {
      setIsLightMode(savedMode == "light");
    }
  }, []);

  useEffect(() => {
    setDivWidth(divRef.current.offsetWidth);

    const handleResize = () => {
      setDivWidth(divRef.current.offsetWidth);
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

          const mode = document.documentElement.getAttribute("data-bs-theme");
          if (mode == "dark") {
            setIsLightMode(false);
          } else {
            setIsLightMode(true);
          }
        }
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

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
      className={`flex-fill border border-2 rounded-5 d-flex overflow-hidden vehicle_container ${
        isPortrait ? "flex-column" : "flex-row"
      }`}
      ref={divRef}
    >
      {isPortrait ? (
        <div
          className={`border-bottom border-2 ps-4 pe-4 vehicle_details d-flex gap-3 align-items-center ${
            isLightMode ? "bg-body-secondary" : "bg-night"
          }`}
        >
          <div>
            <h1 className="lh-1">{props.title}</h1>
            {props.callsign ? (
              <h4 className="lh-1 text-primary">{props.callsign}</h4>
            ) : null}
          </div>
          {divWidth > 302 ? (
            <div className="ms-auto">
              {props.crew ? (
                <h4 className="lh-1">Bestatzung:{" " + props.crew}</h4>
              ) : null}
              {props.carrier ? (
                <h4 className="lh-1">Träger:{" " + props.carrier}</h4>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      <div
        className={`flex-fill d-flex align-items-center justify-content-center`}
      >
        {props.imgSrc === Vehicle.defaultProps.imgSrc ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width={"50%"}
            height={"50%"}
            className="bi bi-card-image vehicle_img p-2"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
          </svg>
        ) : (
          <img src={props.imgSrc} className="vehicle_img p-2" />
        )}
      </div>
      {isPortrait ? (
        ""
      ) : (
        <span
          className={`flex-fill p-3 d-inline-flex flex-column overflow-y-auto scrollbar-sm border-start border-2 vehicle_details wrapping-whitespace ${
            isLightMode ? "bg-body-secondary" : "bg-night"
          }`}
        >
          <h1>{props.title}</h1>
          <h4 className="text-secondary">
            {props.callsign != null ? (
              <>
                <span className="text-primary wrapping-whitespace">
                  {props.callsign}
                </span>{" "}
                <br />
              </>
            ) : null}

            {props.crew != null ? "Besatzung: " + props.crew : null}
          </h4>
          {props.details != null ? (
            <span className="flex-fill d-flex align-items-center text-gap">
              <h5 className="d-flex flex-column">{props.details}</h5>
            </span>
          ) : null}
          {props.date != null ? (
            <h5 className="text-secondary">
              Indienstellung:
              <br />
              {props.date}
            </h5>
          ) : null}
          {props.carrier != null ? (
            <h5 className="text-secondary">
              Träger:
              <br />
              {props.carrier}
            </h5>
          ) : null}
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
