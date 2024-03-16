import React from "react";
import { useState, useEffect, useRef } from "react";
import "./deploymentStatistics.scss";
import deployment_data from "./deployments";
import DeploymentTypes from "./deploymentTypes/DeploymentTypes";
import DeploymentChart from "./DeploymentChart";
import DeploymentTable from "./DeploymentTable";
import ButtonBar from "./ButtonBar";

const DeploymentStatistics = () => {
  const mainRef = useRef();
  const contentRef = useRef(null);
  const secondaryRef = useRef(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });
  const [year, setYear] = useState(new Date().getFullYear());
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    isPortrait ? setShowDetails(false) : null;
  }, [isPortrait]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is not in the viewport, set showDetails to false
        if (!entry.isIntersecting && !isPortrait) {
          setShowDetails(false);
        }
      },
      {
        root: null, // null means it's relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // 0.1 means it will trigger when 10% of the element is visible
      }
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => observer.unobserve(mainRef.current);
  }, []);

  useEffect(() => {
    //toggle portrait mode
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    //set placeholder size
    function updateSize() {
      setContentSize({
        width:
          showDetails && !isPortrait
            ? secondaryRef.current.offsetHeight
            : contentRef.current.offsetWidth,
        height:
          showDetails && !isPortrait
            ? secondaryRef.current.offsetHeight
            : contentRef.current.offsetHeight,
      });
    }
    updateSize();

    window.addEventListener("resize", updateSize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("resize", handleResize);
    };
  }, [showDetails, isPortrait, year]);

  //lock srolling
  useEffect(() => {
    if (showDetails && !isPortrait) {
      const element = document.getElementById("deployment");
      element.scrollIntoView({ behavior: "smooth" });
      document.body.style.overflow = "hidden";
    } else if (showDetails && isPortrait) {
      const element = document.getElementById("deployment-types");
      element.scrollIntoView({ behavior: "smooth" });
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetails]);

  return (
    <div
      className="flex-fill d-flex flex-column overflow-x-hidden"
      ref={mainRef}
    >
      <div
        className={`w-100 flex-fill d-flex flex-column justify-content-center align-items-center position-relative vw-100 overflow-x-hidden rounded-3 mt-5`}
      >
        <div
          id="placeholder"
          className="invisible"
          style={{ width: contentSize.width, height: contentSize.height }}
        />
        <div
          className={`flex-fill w-100 d-flex flex-column ${
            showDetails & !isPortrait ? "out-left" : "centered"
          }`}
          ref={contentRef}
        >
          <h1 className="title mb-5">Einsatzstatistik</h1>
          <div
            className={`flex-fill d-flex gap-3 flex-wrap justify-content-center align-items-center ps-3 pe-3 ${
              isPortrait ? "mb-5" : ""
            }`}
          >
            <DeploymentChart data={deployment_data[year]} year={year} />
            <DeploymentTable data={deployment_data[year]} />
          </div>
          {isPortrait ? null : (
            <span
              className="mt-5 mb-5 text-primary text-decoration-underline pointer icon-link icon-link-hover d-flex align-items-center lh-1"
              onClick={() => setShowDetails(true)}
            >
              Erfahre mehr über die Einsatzcodes & -stichwörter
              <i className="bi bi-arrow-right fs-5"></i>
            </span>
          )}

          <ButtonBar
            selectedYear={year}
            setYear={setYear}
            years={Object.keys(deployment_data)}
            portraitMode={isPortrait}
          />
        </div>
        {isPortrait ? null : (
          <div
            className={
              showDetails
                ? "centered"
                : isPortrait
                ? "out-right top-0"
                : "out-right"
            }
          >
            <DeploymentTypes
              onClickClose={() => setShowDetails(false)}
              ref={secondaryRef}
            />
          </div>
        )}
      </div>
      <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-3">
        {isPortrait ? (
          <>
            {!showDetails ? (
              <span
                className="mt-5 mb-2 text-primary text-decoration-underline pointer icon-link icon-link-hover d-flex align-items-center lh-1"
                onClick={() => setShowDetails(true)}
              >
                Erfahre mehr über die Einsatzcodes & -stichwörter
                <i className="bi bi-arrow-right fs-5"></i>
              </span>
            ) : null}

            {showDetails ? (
              <DeploymentTypes
                onClickClose={() => setShowDetails(false)}
                portraitMode={true}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default DeploymentStatistics;
