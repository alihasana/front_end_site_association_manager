import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { ParallaxButton} from 'react-parallax-button';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Notes } from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";


// Sections for this page


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Association Manager"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Inscription</h1>
              <h4>
              
La création d’une association doit obligatoirement être publiée au JOAFE afin que son existence soit reconnue sur un plan juridique.
La publication au JOAFE s’effectue sur le site de consultation à l'adresse suivante : www.journal-officiel.gouv.fr. Dès la mise en ligne
de votre annonce vous pouvez télécharger le justificatif de publication. Il donne accès aux informations publiées au JOAFE dans des
conditions de nature à garantir son authenticité par une signature électronique et une accessibilité permanente.
Pour tout renseignement concernant la publication de votre annonce, vous pouvez vous rendre sur le site :
www.journal-officiel.gouv.fr, rubrique " Nous contacter ".
              </h4>
              <br />

              <ParallaxButton  
                text="Kit gratuit"
                href="https://www.associations.gouv.fr/kitgratuit.html"  
                parallaxScale={0.7}
                icon={Notes}
                backgroundStyle={{  
                  background: 'linear-gradient(right, #c7bbdb, #facff3 )',  
                  borderRadius: '8px',  
                  boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'  
                }}  
                textStyle={{  
                  padding: '1.5em 2.5em 1.5em 2.5em',  
                  color: 'white'  
                }} 
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

        </div>
      </div>
      <Footer />
    </div>
  );
}
