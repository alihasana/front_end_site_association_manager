import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const {elements}=props
  return (
    <GridContainer className={classes.marginAuto}>
      <GridItem xs={12} sm={12} md={8}>
        <Carousel {...settings}>
          {elements.map((prop, key) =>
            <div key={key} >
              <img src={prop.image} alt={prop.title}className="slick-image" />
              <div className="slick-caption">
                <h3 color="blue">{prop.title}</h3>
                <h4>{prop.description}</h4>
              </div>
            </div>)}
        </Carousel>
      </GridItem>
    </GridContainer>
  );
}
SectionCarousel.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      descritption: PropTypes.string,
      textAnimation: PropTypes.string
    })
  ).isRequired,
}
