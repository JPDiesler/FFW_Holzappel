import React from "react";
import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./deploymentStatistics.scss";

const deployments2023 = [
  {
    categorie: "TH",
    date: "31.01.2023",
    time: "16:31 Uhr",
    description: "Eingeklemmente Person Hirschberg",
    type: "H2.03",
  },
  {
    categorie: "TH",
    date: "24.02.2023",
    time: "12:22 Uhr",
    description: "Unterstüzung Personenrettung Langenscheid",
    type: "H1.08",
  },
  {
    categorie: "TH",
    date: "10.03.2023",
    time: "19:07 Uhr",
    description: "Baum auf Fahrzeug L317 zwischen Hirschberg & Eppenrod",
    type: "H2.07",
  },
  {
    categorie: "U",
    date: "10.03.2023",
    time: "19:24 Uhr",
    description: "umgestürzter Baum Laurenburger Schleuse",
    type: "U2.07",
  },
  {
    categorie: "B",
    date: "23.03.2023",
    time: "16:21 Uhr",
    description: "Gebäudebrand Cramberg",
    type: "B3.01",
  },
  {
    categorie: "TH",
    date: "24.03.2023",
    time: "16:41 Uhr",
    description: "Person in Zwangslage zwischen Holzappel & Geilnau",
    type: "H2.04",
  },
  {
    categorie: "W",
    date: "28.04.2023",
    time: "20:02 Uhr",
    description: "Schiffsbrand Laurenburg",
    type: "W3.01",
  },
  {
    categorie: "B",
    date: "09.05.2023",
    time: "08:45 Uhr",
    description: "Kaminbrand Holzappel",
    type: "B2.04",
  },
  {
    categorie: "B",
    date: "25.05.2023",
    time: "19:26 Uhr",
    description: "Rauchentwicklung aus Gebäude Eppenrod",
    type: "B2.01",
  },
  {
    categorie: "B",
    date: "08.06.2023",
    time: "22:17 Uhr",
    description: "Waldbrand Dörnberg",
    type: "B2.02",
  },
  {
    categorie: "B",
    date: "03.07.2023",
    time: "18:50 Uhr",
    description: "Unterstützung TLF-3000 Flächenbrand Dachsenhausen",
    type: "B2.02",
  },
  {
    categorie: "B",
    date: "04.07.2023",
    time: "14:25 Uhr",
    description: "Unterstützung TLF-3000 Flächenbrand Lierschied",
    type: "B2.02",
  },
  {
    categorie: "TH",
    date: "10.07.2023",
    time: "01:57 Uhr",
    description: "Türöffnung für den Rettungsdienst in Horhausen",
    type: "H2.01",
  },
  {
    categorie: "TH",
    date: "10.07.2023",
    time: "11:08 Uhr",
    description: "Personenrttung aus unwegsamen Gelände B417",
    type: "H2.02",
  },
  {
    categorie: "B",
    date: "11.07.2023",
    time: "18:17 Uhr",
    description: "Flächenbrand Holzheim",
    type: "B2.02",
  },
  {
    categorie: "B",
    date: "11.07.2023",
    time: "19:43 Uhr",
    description: "Rauchentwicklung aus Gebäude Dörnberg",
    type: "B2.01",
  },
  {
    categorie: "B",
    date: "12.07.2023",
    time: "15:50 Uhr",
    description: "Unterstützung TLF-3000 Flächenbrand Altendiez",
    type: "B2.02",
  },
  {
    categorie: "B",
    date: "19.07.2023",
    time: "11:56 Uhr",
    description: "Unterstützung TLF-3000 Flächenbrand Stahlhofen",
    type: "B1.02",
  },
  {
    categorie: "B",
    date: "27.07.2023",
    time: "11:39 Uhr",
    description: "Fahrzeugbrand nach Verkehrsunfall Eppenrod",
    type: "B2.03",
  },
  {
    categorie: "B",
    date: "03.09.2023",
    time: "16:34 Uhr",
    description: "Dachstuhlbrand in Diez",
    type: "B3.01",
  },
  {
    categorie: "B",
    date: "12.09.2023",
    time: "22:06 Uhr",
    description: "Rauchentwicklung aus Gebäude Horhausen",
    type: "B2.01",
  },
  {
    categorie: "U",
    date: "12.09.2023",
    time: "23:24 Uhr",
    description: "Unterstützung mit Aggregart in Diez nach Unwetter",
    type: "U2.02",
  },
  {
    categorie: "B",
    date: "17.09.2023",
    time: "19:08 Uhr",
    description: "Gebäudebrand Scheidt",
    type: "B3.01",
  },
  {
    categorie: "G",
    date: "22.10.2023",
    time: "11:39 Uhr",
    description: "Ölspur B417",
    type: "G1.01",
  },
  {
    categorie: "TH",
    date: "26.10.2023",
    time: "23:16 Uhr",
    description: "Türöffnung für den Rettungsdienst Holzappel",
    type: "H2.01",
  },
  {
    categorie: "B",
    date: "11.11.2023",
    time: "11.05 Uhr",
    description: "Kaminbrand Hirschberg",
    type: "B2.04",
  },
  {
    categorie: "B",
    date: "14.11.2023",
    time: "10:35 Uhr",
    description: "Kaminbrand Laurenburg",
    type: "B2.04",
  },
  {
    categorie: "U",
    date: "27.11.2023",
    time: "19:01 Uhr",
    description: "Unwetter, Ast auf Stromleitung Dörnberg-Hütte",
    type: "U2.04",
  },
  {
    categorie: "U",
    date: "27.11.2023",
    time: "20:23 Uhr",
    description: "Unwetter, Baum auf Stromleitung Holzappel",
    type: "U2.04",
  },
  {
    categorie: "TH",
    date: "27.11.2023",
    time: "21:36 Uhr",
    description: "Unwetter, Umgestürzter Baum Bruchhäuser Mühle",
    type: "H1.07",
  },
  {
    categorie: "U",
    date: "27.11.2023",
    time: "22:17 Uhr",
    description: "Unwetter, Baum auf Fahrbahn B417 Holzappel-Laurenburg",
    type: "U2.07",
  },
  {
    categorie: "TH",
    date: "27.11.2023",
    time: "22:35 Uhr",
    description: "PKW zwichen Bäumen eingeschlossen, B417 Holzappel-Laurenburg",
    type: "H1.07",
  },
  {
    categorie: "TH",
    date: "28.11.2023",
    time: "11:08 Uhr",
    description: "Ast auf Stromleitung Dörnberg-Hütte",
    type: "H1.07",
  },
];
const deployments2024 = [
  {
    categorie: "B",
    date: "08.01.2024",
    time: "08:31 Uhr",
    description: "B2 Busbrand L317 zwischen Hirschberg und Eppenrod",
    type: "B2.03",
  },
  {
    categorie: "B",
    date: "08.01.2024",
    time: "18:56 Uhr",
    description: "B2 Kaminbrand Dörnberg Hütte",
    type: "B2.04",
  },
  {
    categorie: "B",
    date: "23.01.2024",
    time: "10:55 Uhr",
    description: "B2 Kaminbrand Laurenburg",
    type: "B2.04",
  },
];

const deployment_data = {
  2014: [],
  2015: [],
  2016: [],
  2017: [],
  2018: [],
  2019: [],
  2020: [],
  2021: [],
  2022: [],
  2023: deployments2023,
  2024: deployments2024,
};

const DeploymentStatistics = () => {
  const chartRef = useRef(null);
  const divRef = useRef();
  const [isScrollable, setIsScrollable] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const firstYear = Math.min(...Object.keys(deployment_data).map(Number));

  function countData(types, data) {
    const entryCount = [];
    types.forEach((type) => {
      let count = 0;
      data.forEach((deployment) => {
        if (deployment.categorie == type) {
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
        ctx.restore();
      },
    };

    // Create a new Chart instance
    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Brand",
          "Tech. Hilfe",
          "Wasserrettung",
          "Unterstüzung",
          "Gefahrstoff",
          "Fehlarlam",
        ],
        datasets: [
          {
            data: countData(["B", "TH", "W", "U", "G", "F"], data),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(50, 70, 255)",
              "#30D9A3",
              "rgb(255, 205, 86)",

              "#C2C2C2",
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

    const observer = new MutationObserver(checkScrollable);

    observer.observe(div, { childList: true, subtree: true });

    checkScrollable();

    return () => observer.disconnect();
  }, []);

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
      <div className="d-flex align-items-center justify-content-center flex-column pt-5 mt-3 mb-3">
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
                  className={`flex-fill bg-body overflow-y-auto scrollbar list rounded border p-2 ${
                    isScrollable ? "pe-0" : ""
                  }`}
                  ref={divRef}
                >
                  <div className="rounded border  overflow-hidden">
                    <table className="table table-striped table-hover rounded align-middle m-0">
                      <tbody className="">
                        {deployment_data[year].map((deployment, index) => (
                          <tr key={index} className="fw-semibold">
                            <td className="text-center border-end">{index}.</td>
                            <td>
                              {deployment.date}
                              <br />
                              {deployment.time}
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
    </>
  );
};

export default DeploymentStatistics;
