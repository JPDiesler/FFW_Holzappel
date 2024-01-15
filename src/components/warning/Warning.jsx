import React from "react";
import PropTypes from "prop-types";

const Warning = (props) => {
  const icons = {
    info: "bi bi-info-circle",
    success: "bi bi-check-circle",
    warning: "bi bi-exclamation-triangle",
    danger: "bi bi-exclamation-octagon",
    light: "bi bi-sun",
    dark: "bi bi-moon",
  };
  let icon = "";
  if (props.icon === "" || props.icon === undefined) {
    icon = icons[props.type];
  } else {
    icon = props.icon;
  }
  return (
    <div className={"alert alert-" + props.type} role="alert">
      <span className="d-flex align-items-center gap-1 mb-2">
        <i className={icon + " mb-1 me-2 fs-4"} />
        <h3 className="flex-fill">{props.heading}</h3>
        {props.dismissable !== undefined ? (
          <button
            className={
              "ms-2 d-flex align-items-center gap-1 " +
              (props.dismissable.style !== undefined &&
              props.dismissable.style !== ""
                ? props.dismissable.style
                : "btn btn-outline-" +
                  (props.type === "dark" ? "light" : props.type))
            }
            onClick={() =>
              props.dismissable.onClick(
                props.dismissable.onClickValue !== undefined
                  ? props.dismissable.onClickValue
                  : null
              )
            }
          >
            <i className="bi bi-x-lg" />
            {props.dismissable.text}
          </button>
        ) : null}
      </span>
      {props.children}
      {props.buttonAgree !== undefined || props.buttonDisagree !== undefined ? (
        <span className="d-flex mt-3">
          {props.buttonAgree !== undefined ? (
            <button
              className={
                "d-flex align-items-center gap-1 flex-grow-1 justify-content-center " +
                (props.buttonAgree.style !== undefined &&
                props.buttonAgree.style !== ""
                  ? props.buttonAgree.style
                  : "btn btn-outline-" +
                    (props.type === "dark" ? "light" : props.type)) +
                (props.buttonDisagree !== undefined ? " me-2" : "")
              }
              onClick={() =>
                props.buttonAgree.onClick(
                  props.buttonAgree.onClickValue !== undefined
                    ? props.buttonAgree.onClickValue
                    : null
                )
              }
            >
              <i className={props.buttonAgree.icon} />
              {props.buttonAgree.text}
            </button>
          ) : null}
          {props.buttonDisagree !== undefined ? (
            <button
              className={
                "d-flex align-items-center gap-1 flex-grow-1 justify-content-center " +
                (props.buttonDisagree.style !== undefined &&
                props.buttonDisagree.style !== ""
                  ? props.buttonDisagree.style
                  : "btn btn-outline-" +
                    (props.type === "dark" ? "light" : props.type))
              }
              onClick={() =>
                props.buttonDisagree.onClick(
                  props.buttonDisagree.onClickValue !== undefined
                    ? props.buttonDisagree.onClickValue
                    : null
                )
              }
            >
              <i className={props.buttonDisagree.icon} />
              {props.buttonDisagree.text}
            </button>
          ) : null}
        </span>
      ) : null}
    </div>
  );
};

Warning.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]),
  dismissable: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
    onClickValue: PropTypes.any,
    style: PropTypes.string,
  }),
  buttonAgree: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
    onClickValue: PropTypes.any,
    style: PropTypes.string,
    icon: PropTypes.string,
  }),
  buttonDisagree: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
    onClickValue: PropTypes.any,
    style: PropTypes.string,
    icon: PropTypes.string,
  }),
  children: PropTypes.node,
  icon: PropTypes.string,
  heading: PropTypes.string,
};

Warning.defaultProps = {
  type: "warning",
};

export default Warning;
