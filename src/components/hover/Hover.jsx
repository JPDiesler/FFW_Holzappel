import React from "react";
import PropTypes from "prop-types";
import "./css/hover.css";

const Hover = (props) => {
  const { fullScreen, centered } = props;
  let classList = "bg-dark bg-opacity-75";
  if (fullScreen) {
    classList += " fullscreen";
  } else {
    classList += " noFullscreen";
  }
  if (centered) {
    classList += " centered";
  }
  return <div className={classList}>{props.children}</div>;
};

Hover.propTypes = {
  children: PropTypes.element,
  fullScreen: PropTypes.bool,
  centered: PropTypes.bool,
};
Hover.defaultProps = {
  fullScreen: true,
  centered: false,
};

export default Hover;
