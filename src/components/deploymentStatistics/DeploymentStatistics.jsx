import React from "react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./deploymentStatistics.scss";

const DeploymentStatistics = (props) => {
  const chartRef = useRef(null);

  const data = [23, 20, 3, 10];

  useEffect(() => {
    const ctx = document.getElementById("myChart");

    const indexOfLargest = data.indexOf(Math.max(...data));
    const offsets = Array(data.length).fill(0);
    offsets[indexOfLargest] = 20;

    // Check if there is an existing Chart instance and destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new Chart instance
    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Brand", "Tech. Hilfe", "Gefahrstoff", "Fehlarlam"],
        datasets: [
          {
            data: data,
            borderWidth: 0,
            backgroundColor: ["#FF6666", "#FF3333", "#CC0000", "#990000"],
            offset: offsets,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "#e9ecef",
              font: {
                weight: "550",
                size: "15",
              },
            },
            align: "center",
            position: "bottom",
          },
        },
      },
    });

    // Cleanup: Destroy the Chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="d-inline-flex flex-column bg-secondary-subtle rounded-4">
      <span className="fs-1 fw-semibold d-flex align-items-center gap-3 ms-5">
        Einsatzstatistik: <i className="bi bi-clipboard-data"></i>
      </span>
      <div className="chart-canvas">
        <canvas id="myChart" className="fw-semibold" />
      </div>
    </div>
  );
};

DeploymentStatistics.propTypes = {};

export default DeploymentStatistics;
