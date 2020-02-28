import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { ParallaxButton} from 'react-parallax-button';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {LibraryBooks} from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page


const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  function handleClick(e) {
    e.preventDefault();
    window.open("https://www.associations.gouv.fr/kitgratuit.html");
  }

  function dynamicform(e) {
    e.preventDefault();

  }

  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand="Association Manager"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/visual-easily-collaborate.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Inscription</h1>
              <h4><span>
              
La création d’une association doit obligatoirement être publiée au JOAFE afin que son existence soit reconnue sur un plan juridique.
La publication au JOAFE s’effectue sur le site de consultation à l'adresse suivante : www.journal-officiel.gouv.fr. Dès la mise en ligne
de votre annonce vous pouvez télécharger le justificatif de publication. Il donne accès aux informations publiées au JOAFE dans des
conditions de nature à garantir son authenticité par une signature électronique et une accessibilité permanente.
Pour tout renseignement concernant la publication de votre annonce, vous pouvez vous rendre sur le site :
www.journal-officiel.gouv.fr, rubrique " Nous contacter ".
</span></h4>
            <br />
           
            <ParallaxButton 
              text="Kit gratuit"
              parallaxScale={0.7}
              backgroundStyle={{  
                background: `linear-gradient(right,  #0038F0, #0DBD5C)`,  
                borderRadius: '8px',  
                boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'  
              }}  
              textStyle={{  
                padding: '1.5em 2.5em 1.5em 2.5em',  
                color: 'white',
              }}
              onClick={handleClick} 
              >
                <LibraryBooks className={classes.button.jusIcon}/> 
              </ParallaxButton>
            
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CustomInput
              labelText="Type d'association"
              id="AssosType"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ParallaxButton className={"fab fa-list-alt"}
                      text="Next"
                      parallaxScale={0.7}
                      backgroundStyle={{  
                        background: 'linear-gradient(right, #0038F0, #0DBD5C)',  
                        borderRadius: '8px',  
                        boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'  
                      }}  
                      textStyle={{  
                        padding: '1.5em 2.5em 1.5em 2.5em',  
                        color: 'white'  
                      }}
                      onClick={dynamicform} 
                    />
                  </InputAdornment>
                )
              }}
          />

        
        </div>
      </div>
      <Footer />
    </div>
  );
}
