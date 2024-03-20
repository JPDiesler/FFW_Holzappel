import React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const DeploymentTable = (props) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const div = divRef.current;

    function checkScrollable() {
      if (div.scrollHeight > div.clientHeight) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    }

    if (props.data.length > 0) {
      const observer = new MutationObserver(checkScrollable);
      observer.observe(div, { childList: true, subtree: true });
      checkScrollable();
      return () => observer.disconnect();
    }
  }, [props.data]);

  return (
    <div className="list-container rounded-3 border bg-body p-3">
      <div
        className={`list overflow-y-auto scrollbar border border-2  rounded ${
          isScrollable ? "pe-0" : ""
        }`}
        ref={divRef}
      >
        <div className="rounded rounded-end-0 overflow-hidden">
          <table className="table table-striped table-hover align-middle m-0">
            <tbody className="">
              {props.data.map((deployment, index) => (
                <tr key={index} className="fw-semibold">
                  <td className="text-center border-end">{index + 1}.</td>
                  <td className="border-end">
                    {deployment.date}
                    <br />
                    {deployment.time != null ? deployment.time + " Uhr" : null}
                  </td>
                  <td className="text-center border-end">{deployment.type}</td>
                  <td className="fw-normal word-brea border-end">
                    {deployment.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

DeploymentTable.propTypes = { data: PropTypes.array.isRequired };

export default DeploymentTable;
