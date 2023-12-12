import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getDWDWarnings } from "./src/dwd";
import WeatherWarning from "./WeatherWarning";
import "./css/weatherwarnings.scss";

const DwdWidget = (props) => {
  const [warnings, setWarnings] = useState([]);

  const fetchData = async (name) => {
    console.log(name);
    try {
      const warnCellIds = await fetch(
        "src/components/dwd/assets/warncellids.json"
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error loading JSON file:", error);
          throw error;
        });
      const keys = Object.keys(warnCellIds);
      for (const key of keys) {
        if (key.includes(name)) {
          const warnCellId = warnCellIds[key];
          console.log(warnCellId);
          await getDWDWarnings(warnCellId, setWarnings);
          return;
        }
      }
      throw new Error("No matching warnCellId found");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchDataWithInterval = () => {
      fetchData();
      const interval = setInterval(fetchData(props.location), props.interval);
      return () => clearInterval(interval);
    };

    fetchDataWithInterval(); // Run on mount

    // Run whenever props.location changes
    return fetchDataWithInterval;
  }, [props.location, props.interval]);

  return (
    <div className="m-3 d-inline-flex">
      <WeatherWarning
        warning={warnings[0]}
        tooltipPosition={props.tooltipPosition}
        location={props.location}
      />
    </div>
  );
};

DwdWidget.propTypes = {
  location: PropTypes.string.isRequired,
  interval: PropTypes.number.isRequired,
  tooltipPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
};

export default DwdWidget;
