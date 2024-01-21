import React from "react";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./deploymentStatistics.scss";

const deployments = [
  {
    type: "TH",
    date: "31.01.2023",
    time: "16:31 Uhr",
    description: "H2.03, Eingeklemmente Person Hirschberg",
  },
  {
    type: "TH",
    date: "24.02.2023",
    time: "12:22 Uhr",
    description: "H1.08, Unterstüzung Personenrettung Langenscheid",
  },
  {
    type: "TH",
    date: "10.03.2023",
    time: "19:07 Uhr",
    description: "H2.07, Baum auf Fahrzeug L317 zwischen Hirschberg & Eppenrod",
  },
  {
    type: "U",
    date: "10.03.2023",
    time: "19:24 Uhr",
    description: "U2.07, umgestürzter Baum Laurenburger Schleuse",
  },
  {
    type: "B",
    date: "23.03.2023",
    time: "16:21 Uhr",
    description: "B3.01, Gebäudebrand Cramberg",
  },
  {
    type: "TH",
    date: "24.03.2023",
    time: "16:41 Uhr",
    description: "H2.04, Person in Zwangslage zwischen Holzappel & Geilnau",
  },
  {
    type: "B",
    date: "28.04.2023",
    time: "20:02 Uhr",
    description: "W3.01 Schiffsbrand Laurenburg",
  },
  {
    type: "B",
    date: "09.05.2023",
    time: "08:45 Uhr",
    description: "B2.04, Kaminbrand Holzappel",
  },
  {
    type: "B",
    date: "25.05.2023",
    time: "19:26 Uhr",
    description: "B2.01,Rauchentwicklung aus Gebäude Eppenrod",
  },
  {
    type: "B",
    date: "08.06.2023",
    time: "22:17 Uhr",
    description: "B2.02, Waldbrand Dörnberg",
  },
  {
    type: "B",
    date: "03.07.2023",
    time: "18:50 Uhr",
    description: "B2.02, Unterstützung TLF-3000 Flächenbrand Dachsenhausen",
  },
  {
    type: "B",
    date: "04.07.2023",
    time: "14:25 Uhr",
    description: "B2.02, Unterstützung TLF-3000 Flächenbrand Lierschied",
  },
  {
    type: "TH",
    date: "10.07.2023",
    time: "01:57 Uhr",
    description: "H2.01, Türöffnung für den Rettungsdienst in Horhausen",
  },
  {
    type: "TH",
    date: "10.07.2023",
    time: "11:08 Uhr",
    description: "H2.02, Personenrttung aus unwegsamen Gelände B417",
  },
  {
    type: "B",
    date: "11.07.2023",
    time: "18:17 Uhr",
    description: "B2.02, Flächenbrand Holzheim",
  },
  {
    type: "B",
    date: "11.07.2023",
    time: "19:43 Uhr",
    description: "B2.01, Rauchentwicklung aus Gebäude Dörnberg",
  },
  {
    type: "B",
    date: "12.07.2023",
    time: "15:50 Uhr",
    description: "B2.02, Unterstützung TLF-3000 Flächenbrand Altendiez",
  },
  {
    type: "B",
    date: "19.07.2023",
    time: "11:56 Uhr",
    description: "B1.02, Unterstützung TLF-3000 Flächenbrand Stahlhofen",
  },
  {
    type: "B",
    date: "27.07.2023",
    time: "11:39 Uhr",
    description: "B2.03, Fahrzeugbrand nach Verkehrsunfall Eppenrod",
  },
  {
    type: "B",
    date: "03.09.2023",
    time: "16:34 Uhr",
    description: "B3.01, Dachstuhlbrand in Diez",
  },
  {
    type: "B",
    date: "12.09.2023",
    time: "22:06 Uhr",
    description: "B2.01, Rauchentwicklung aus Gebäude Horhausen",
  },
  {
    type: "U",
    date: "12.09.2023",
    time: "23:24 Uhr",
    description: "U2.02 Unterstützung mit Aggregart in Diez nach Unwetter",
  },
  {
    type: "B",
    date: "17.09.2023",
    time: "19:08 Uhr",
    description: "B3.01 Gebäudebrand Scheidt",
  },
  {
    type: "G",
    date: "22.10.2023",
    time: "11:39 Uhr",
    description: "G1.01 Ölspur B417",
  },
  {
    type: "TH",
    date: "26.10.2023",
    time: "23:16 Uhr",
    description: "H2.01 Türöffnung für den Rettungsdienst Holzappel",
  },
  {
    type: "B",
    date: "11.11.2023",
    time: "11.05 Uhr",
    description: "B2.04, Kaminbrand Hirschberg",
  },
  {
    type: "B",
    date: "14.11.2023",
    time: "10:35 Uhr",
    description: "B2.04, Kaminbrand Laurenburg",
  },
  {
    type: "U",
    date: "27.11.2023",
    time: "19:01 Uhr",
    description: "U2.04, Unwetter, Ast auf Stromleitung Dörnberg-Hütte",
  },
  {
    type: "U",
    date: "27.11.2023",
    time: "20:23 Uhr",
    description: "U2.04, Unwetter, Baum auf Stromleitung Holzappel",
  },
  {
    type: "TH",
    date: "27.11.2023",
    time: "21:36 Uhr",
    description: "H1.07, Unwetter, Umgestürzter Baum Bruchhäuser Mühle",
  },
  {
    type: "U",
    date: "27.11.2023",
    time: "22:17 Uhr",
    description: "U2.07, Unwetter, Baum auf Fahrbahn B417 Holzappel-Laurenburg",
  },
  {
    type: "TH",
    date: "27.11.2023",
    time: "22:35 Uhr",
    description:
      "H1.07, PKW zwichen Bäumen eingeschlossen, B417 Holzappel-Laurenburg",
  },
  {
    type: "TH",
    date: "28.11.2023",
    time: "11:08 Uhr",
    description: "H1.07, Ast auf Stromleitung Dörnberg-Hütte",
  },
];

const DeploymentStatistics = (props) => {
  const chartRef = useRef(null);

  function countData(types, data) {
    const entryCount = [];
    types.forEach((type) => {
      let count = 0;
      data.forEach((deployment) => {
        if (deployment.type == type) {
          count += 1;
        }
      });
      entryCount.push(count);
    });
    return entryCount;
  }

  const data = countData(["B", "TH", "G", "U", "F"], deployments);

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

  function createChart() {
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
    console.log("borderColor: " + borderColor);
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

        let text = "2023", // Your text here
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
          "Gefahrstoff",
          "Unterstüzung",
          "Fehlarlam",
        ],
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "#30D9A3",
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
          createChart();
        }
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { attributes: true });

    // Cleanup: Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    createChart();
  }, [data]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column mt-3 mb-3">
        <div className="flex-fill" />
        <h1 className="title">Einsatzstatistik</h1>
        <div className="flex-fill d-flex align-items-center justify-content-center flex-column">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 mb-5">
            <canvas id="deploymentChart" className="canvas-chart"></canvas>

            <div className="bg-secondary-subtle overflow-y-scroll scrollbar list rounded border p-2">
              <ul className="list-group">
                {deployments.map((deployment, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-secondary list-group-item-action pt-0 pb-0"
                  >
                    <div className="d-flex gap-3 align-items-center ps-0">
                      <h5 className="m-0 number">{index + 1 + "."}</h5>
                      <div className="vr" />
                      <div className="d-flex flex-column datetime">
                        <span className="fw-semibold">{deployment.date}</span>
                        <span className="fw-semibold">{deployment.time}</span>
                      </div>
                      <div className="vr" />
                      <span className="fw-semibold">
                        {deployment.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link">Vorheriges Jahr</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2023
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Nächstes Jahr
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

DeploymentStatistics.propTypes = {};

export default DeploymentStatistics;
