import { container } from "assets/jss/material-kit-react.js";

const bannerStyle = {
  banner: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100px",
   "&-elem":{
      height: "100%",
      "& > * ":{
        position: "relative"
      },
     " &-mask ": {
        position: "relative",
        overflow: "hidden",
        width: "100%"
      }
    },
    "&-thumb": {
      position: "absolute",
      bottom: "0",
      margin: "0",
      padding: "0",
      width: "100%",
      textAlign: "center",
      pointerEvents: "none",
      zZndex: "10",
      "& > span" : {
        pointerEvents: "auto",
        cursor: "pointer",
        display: "inline-block",
        listStyle: "none"
      },
    }
  },
  main: {
    backgroundImage: "inherit",
    padding: "70px 0",
    boxSizing: "initial",
    position: "relative",
    zIndex: "3"
  },
  container
};

export default bannerStyle;
