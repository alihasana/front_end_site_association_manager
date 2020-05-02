import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);
export default function SectionCarousel(props) {
  const classes = useStyles();
  // const [pagingImg, setPagingImg] = React.useState([]) ;
  const imgClass = classNames(
    "slick-image",
    classes.image
  );

  const customDots = classNames(
    "slick-dots",
    classes.dotsThumb
  );

  const {elements}=props;

  const settings = {
    customPaging: (i) => <img src={elements[i].image} alt={elements[i].image}/>,
    dots: true,
    dotsClass: customDots,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: false,
    variableWidth: false,
    useTransform: true
  };
  
  

  return (
    <Carousel {...settings} className={classes.marginAuto}>
      {elements.map((prop, key) => 
        <div key={key} className={classes.crop}>
          <img src={prop.image} alt={prop.title} className={imgClass} />
          <div className="slick-caption">
            <h3>{prop.title}</h3>
          </div>
        </div>)
      }
    </Carousel>
  );
}

SectionCarousel.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      textAnimation: PropTypes.string
    })
  ).isRequired,
}
