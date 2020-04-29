import { container } from "assets/jss/material-kit-react.js";

const carouselStyle = {
    marginAuto: {
    ...container,
    flexBasis: "auto",
    position: "relative",
    overflow: "hidden",
    height: "350px",
    boxSizing: "border-box",
    fontSize: ".875rem",
    zIndex: "3"
  }
};

export default carouselStyle;
