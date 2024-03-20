import React from "react";
import { useState, useEffect, useRef } from "react";
import DeploymentStatistics from "./DeploymentStatistics";
import DeploymentTypes from "./deploymentTypes/DeploymentTypes";

const Deployments = () => {
  const [action, setAction] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const selfRef = useRef(null);
  const contentRef = useRef(null);
  const secondaryContentRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      let maxHeight = 0;
      for (let entry of entries) {
        if (
          entry.target === contentRef.current ||
          entry.target === secondaryContentRef.current
        ) {
          maxHeight = Math.max(maxHeight, entry.contentRect.height);
        }
      }
      setSize((prevSize) => ({ ...prevSize, height: maxHeight }));
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    if (secondaryContentRef.current) {
      observer.observe(secondaryContentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }

      if (secondaryContentRef.current) {
        observer.unobserve(secondaryContentRef.current);
      }
    };
  }, []);

  function handleAction(value) {
    setAction(value);
    const element = document.getElementById("deployments");
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="flex-fill position-relative mt-5 overflow-x-hidden"
      style={{ height: size.height }}
      ref={selfRef}
    >
      <DeploymentStatistics
        className={`position-absolute w-100 ${
          action ? "out-left" : "centered"
        }`}
        ref={contentRef}
        onClickAction={() => handleAction(true)}
      />
      <DeploymentTypes
        className={`position-absolute w-100 ${
          action ? "centered" : "out-right"
        }`}
        onClickClose={() => handleAction(false)}
        ref={secondaryContentRef}
      />
    </div>
  );
};

export default Deployments;
