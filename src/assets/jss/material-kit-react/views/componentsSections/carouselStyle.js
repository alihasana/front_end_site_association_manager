const carouselStyle = {
  marginAuto: {
    margin: "0px",
    padding: "0px",
    width: "100%",
    flexBasis: "auto",
    position: "center",
    height: "350px",
    boxSizing: "border-box",
    fontSize: ".875rem",
    zIndex: "3"
  },
  image: {
    height: "initial",
  },
  crop: {
    overflow: "hidden",
    height: "350px",
  },
  dotsThumb: {
    bottom: "-12px",
    "& li":{
      width: "60px",
      height: "45px",
      backgroundColor: "transparent",
      textDecoration: "none",
    },
    "& li img": {
      width: "100%",
      height: "100%",
      filter: "grayscale(100%)",
    },
    "& li.slick-active button img": {
        filter: "grayscale(0%)",
    },
    ".slick-dots": {
      marginLeft: "0"
    }
  }
};

export default carouselStyle;
