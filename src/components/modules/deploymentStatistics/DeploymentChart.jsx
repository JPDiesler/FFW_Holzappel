import React from "react";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/auto";

const DeploymentChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    createChart(props.data, props.year);
  }, [props.data, props.year]);

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
          createChart(props.data, props.year);
        }
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  function countData(types, data) {
    const entryCount = [];
    types.forEach((type) => {
      let count = 0;
      data.forEach((deployment) => {
        if (deployment.type.includes(type)) {
          count += 1;
        }
      });
      entryCount.push(count);
    });
    return entryCount;
  }

  function getComputedCSSProperty(className, cssProperty) {
    // Create a hidden div with the given class
    let div = document.createElement("div");
    div.className = className;
    div.style.display = "none";
    document.body.appendChild(div);

    // Get the computed color of the div
    let color = window.getComputedStyle(div)[cssProperty];

    // Remove the div
    document.body.removeChild(div);

    return color;
  }

  function createChart(data, year) {
    // Destroy the old chart if it exists
    if (window.myChart) {
      window.myChart.destroy();
    }

    let colorMode = document.documentElement.getAttribute("data-bs-theme");

    const ctx = document.getElementById("deploymentChart");

    const indexOfLargest = data.indexOf(Math.max(...data));
    const offsets = Array(data.length).fill(0);
    offsets[indexOfLargest] = 20;

    // Check if there is an existing Chart instance and destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a hidden div with the .text-body class
    let color = getComputedCSSProperty("text-body", "color");
    let borderColor;
    if (colorMode === "light") {
      borderColor = getComputedCSSProperty("bg-body", "backgroundColor");
    } else if (colorMode === "dark") {
      borderColor = getComputedCSSProperty(
        "bg-secondary-subtle",
        "backgroundColor"
      );
    }
    const chartPlugin = {
      id: "custom_text_in_center",
      beforeDatasetsDraw: (chart) => {
        let chartArea = chart.chartArea;
        let ctx = chart.ctx;

        let width = chartArea.right - chartArea.left;
        let height = chartArea.bottom - chartArea.top;

        ctx.save();
        let fontSize = (height / 114).toFixed(2);
        ctx.font = "bold " + fontSize + "em Arial";
        ctx.textBaseline = "middle";
        // Use the color for the text
        ctx.fillStyle = color;

        let text = year, // Your text here
          textX =
            chartArea.left +
            Math.round((width - ctx.measureText(text).width) / 2),
          textY = chartArea.top + height / 2;

        ctx.fillText(text, textX, textY);

        // Add secondary text
        let secondaryText = data.length + " Einsätze"; // Your secondary text here
        let secondaryFontSize = fontSize / 3; // Adjust as needed
        ctx.font = "bold " + secondaryFontSize + "em Arial";
        let secondaryTextX =
          chartArea.left +
          Math.round((width - ctx.measureText(secondaryText).width) / 2);
        let secondaryTextY = textY + parseInt(fontSize) * 10 + 5; // Adjust the multiplier as needed

        ctx.fillText(secondaryText, secondaryTextX, secondaryTextY);

        ctx.restore();
      },
    };

    // Create a new Chart instance
    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Brandeinsätze",
          "Gefahrstoffeinsätze",
          "Unterstüzungseinsätze",
          "Hilfeleistungseinsätze",
          "Wassereinsätze",
          "Sondereinsätze",
        ],
        datasets: [
          {
            data: countData(["B", "G", "U", "H", "W", "S"], data),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 205, 86)",
              "#30D9A3",
              "rgb(54, 162, 235)",
              "rgb(50, 70, 255)",
              "rgb(156, 81, 255)",
            ],
            borderColor: borderColor,
            borderWidth: 8,
            borderRadius: 15,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: color,
              font: {
                weight: "550",
                size: "15",
              },
            },
            align: "center",
            position: "bottom",
          },
          tooltip: {
            displayColors: false,
            titleFont: {
              size: 14,
              weight: 600,
            },
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.raw !== undefined) {
                  label += context.raw + " Einsätze";
                } else {
                  label += "0 Einsätze"; // default to 0 if context.raw is undefined
                }
                return label;
              },
            },
          },
          custom_text_in_center: {}, // Enable the plugin
        },
      },
      plugins: [chartPlugin],
    });

    // Cleanup: Destroy the Chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }

  return (
    <canvas
      id="deploymentChart"
      style={{
        width: "50vw",
        height: "50vw",
        maxWidth: "500px",
        maxHeight: "500px",
        minWidth: "100px",
        minHeight: "100px",
      }}
    />
  );
};

DeploymentChart.propTypes = {
  data: PropTypes.array.isRequired,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DeploymentChart;
