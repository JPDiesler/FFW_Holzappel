import React from "react";
import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./deploymentStatistics.scss";
import deployment_data from "./deployments";
import DeploymentTypes from "./DeploymentTypes";
import Hover from "../../hover/Hover";
const DeploymentStatistics = () => {
  const chartRef = useRef(null);
  const divRef = useRef();
  const [isScrollable, setIsScrollable] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const firstYear = Math.min(...Object.keys(deployment_data).map(Number));
  const [showDetails, setShowDetails] = useState(false);

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
          createChart(deployment_data[year], year);
        }
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (deployment_data[year] && deployment_data[year].length > 0) {
      createChart(deployment_data[year], year);
    }
  }, [year, deployment_data]);

  useEffect(() => {
    const div = divRef.current;

    function checkScrollable() {
      if (div.scrollHeight > div.clientHeight) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    }

    if (deployment_data[year].length > 0) {
      const observer = new MutationObserver(checkScrollable);
      observer.observe(div, { childList: true, subtree: true });
      checkScrollable();
      return () => observer.disconnect();
    }
  }, [year, deployment_data]);

  function generatePreviousYearsButtons() {
    let d = 0;
    const currentYear = new Date().getFullYear();
    const delta = currentYear - year;
    if (delta >= 2) {
      d = 2;
    } else {
      d = 4 - delta;
    }
    const buttons = [];
    for (let i = 1; i <= d; i++) {
      if (year - i < firstYear) break;
      buttons.unshift(
        <button
          key={i}
          type="button"
          className="btn btn-primary border border-primary-subtle"
          onClick={() => {
            setYear(year - i);
          }}
        >
          {year - i}
        </button>
      );
    }
    return buttons;
  }

  function generateNextYearsButtons() {
    let d = 0;
    const delta = year - firstYear;
    if (delta >= 2) {
      d = 2;
    } else {
      d = 4 - delta;
    }
    const buttons = [];
    for (let i = 1; i <= d; i++) {
      if (year + i > new Date().getFullYear()) break;
      buttons.push(
        <button
          key={i}
          type="button"
          className="btn btn-primary border border-primary-subtle"
          onClick={() => {
            setYear(year + i);
          }}
        >
          {year + i}
        </button>
      );
    }
    return buttons;
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column pt-5 mt-3 mb-5">
        <h1 className="title">Einsatzstatistik</h1>
        <div className="flex-fill d-flex align-items-center justify-content-center flex-column">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
            {deployment_data[year].length == 0 ? (
              <span className="d-flex flex-column align-items-center justify-content-center">
                <h2>{year}</h2>
                <h5 className="fw-semibold text-secondary">
                  Keine Einsätze vorhanden!
                </h5>
              </span>
            ) : (
              <>
                <canvas id="deploymentChart" className="canvas-chart"></canvas>
                <div
                  className={`bg-body list overflow-y-auto scrollbar  rounded border p-2 ${
                    isScrollable ? "pe-0" : ""
                  }`}
                  ref={divRef}
                >
                  <div className="rounded border  overflow-hidden">
                    <table className="table table-striped table-hover rounded align-middle m-0">
                      <tbody className="">
                        {deployment_data[year].map((deployment, index) => (
                          <tr key={index} className="fw-semibold">
                            <td className="text-center border-end">
                              {index + 1}.
                            </td>
                            <td>
                              {deployment.date}
                              <br />
                              {deployment.time != null
                                ? deployment.time + " Uhr"
                                : null}
                            </td>
                            <td className="text-center border-start">
                              {deployment.type}
                            </td>
                            <td className="fw-normal text-break border-start">
                              {deployment.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <a
          className="icon-link icon-link-hover lh-1 mb-4"
          href="#"
          onClick={() => setShowDetails(true)}
        >
          Erfahre mehr über die Einsatzbezeichnungen
        </a>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={
                year == firstYear
                  ? "btn btn-primary-outline"
                  : "btn btn-primary border border-primary-subtle"
              }
              onClick={() => {
                setYear(firstYear);
              }}
              disabled={year == firstYear}
            >
              <i className="bi bi-chevron-double-left"></i>
            </button>

            <button
              type="button"
              className={
                year == firstYear
                  ? "btn btn-primary-outline"
                  : "btn btn-primary border border-primary-subtle"
              }
              onClick={() => {
                setYear(year - 1);
              }}
              disabled={year == firstYear}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            {generatePreviousYearsButtons()}
            <button
              type="button"
              className="pe-none btn btn-primary border border-primary-subtle "
            >
              {year}
            </button>
            {generateNextYearsButtons()}
            <button
              type="button"
              className={
                year == new Date().getFullYear()
                  ? "btn btn-primary-outline"
                  : "btn btn-primary border border-primary-subtle"
              }
              onClick={() => {
                setYear(year + 1);
              }}
              disabled={year == new Date().getFullYear()}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
            <button
              type="button"
              className={
                year == new Date().getFullYear()
                  ? "btn btn-primary-outline"
                  : "btn btn-primary border border-primary-subtle"
              }
              onClick={() => {
                setYear(new Date().getFullYear());
              }}
              disabled={year == new Date().getFullYear()}
            >
              <i className="bi bi-chevron-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      {showDetails ? (
        <Hover fullScreen={true} centered={true}>
          <DeploymentTypes onClickClose={() => setShowDetails(false)} />
        </Hover>
      ) : null}
    </>
  );
};

export default DeploymentStatistics;
