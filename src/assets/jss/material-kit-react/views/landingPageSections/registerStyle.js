import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const registerStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    marginBottom: "40px",
    position: "relative",
    width: "100%",
    textAlign: "center"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  margin: {
    textAlign: "center !important",
    height: "initial"
  },
  inputAdornment: {
    marginBottom: "25px"
  },
  button: {
    margin: "0px",
    padding: "0px"
  },
  crop:{
    overflow: "hidden",
    height: "194px"
  },
  image:{
    width: "100%",
    height:"100%",
    filter: "grayscale(100%)"
  },
  imgActive:{
    width: "100%",
    height:"100%",
    filter: "grayscale(0%)"
  },
  ...imagesStyles
};

export default registerStyle;
