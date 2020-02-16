import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import NavSearch from "components/NavSearch/NavSearch.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ProductSection from "./Sections/ProductSection";
import WorkSection from "./Sections/WorkSection.js";

import logo from "assets/img/logo512.png";

import styles from "assets/jss/material-kit-react/views/homePage.js";


const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        brand="Association Manager"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <img src={logo} alt="association-manager-logo" className={imageClasses} />
                <h1 className={classes.title}>Association Manager</h1>
                <h3 className={classes.subtitle}>
                  Le site où les associations libèrent leurs organisations
                </h3>
              </div>
            </GridItem>
            <GridItem>
              <NavSearch/>
            </GridItem>

          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>

        <ProductSection />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
