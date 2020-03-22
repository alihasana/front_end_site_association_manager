import React, {useState} from "react";
import {ParallaxButton} from 'react-parallax-button';
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
//import { Storefront, FolderShared, SupervisorAccount, CompareArrows, StayCurrentPortrait } from "@material-ui/icons";
//import Chat from "@material-ui/icons/Chat";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import NavPills from "components/NavPills/NavPills.js"
import Button from "components/CustomButtons/Button.js"

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/registerStyle.js";


const useStyles = makeStyles(styles);

export default function RegistrationSection() {
  const classes = useStyles();

  const classseImage = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
  )
  const [activeCount, setActiveCount] = useState(0);

  return (
    <GridContainer className={classes.container}>
      <GridItem>
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
                // onClick={dynamicform} 
              />
            </InputAdornment>
          )
        }}
      />
      </GridItem>
      <GridItem>
      <NavPills
      active={activeCount}
        tabs={[
          {
            tabButton: "1",
            tabContent: (
              <GridItem>
                <img className={classseImage} src={work1} alt=""/>
                <h2 className={classes.title}>Combien ça coûte de créer mon site internet ?</h2>
                <p className="subtitle fonts-loaded">Calculez rapidement le coût de création de votre site internet ou page web. Devis en ligne et gratuit.</p>
                <Button>Calculer</Button>
              </GridItem>
            )
          },
          {
            tabButton: "2",
            tabContent: (
              <GridContainer data-question-id="1">
                <div className={classes.typo}>
                  <h3 className={classes.title}>De quel type de site internet avez-vous besoin ?</h3>
                </div>
                  <GridItem xs={12} sm={2} data-answer-id="1" data-answer-weight="350" >
                    <Button  simple onClick={() => setActiveCount(prevActiveCount => prevActiveCount + 1)}>
                      <img className={classseImage} src={studio1} alt="E-commerce/Magasin en ligne"/>
                      <span className="answer-text">E-commerce/Magasin en ligne</span>
                      </Button>
                  </GridItem>
                  <GridItem xs={12} sm={2} className={classes.marginLeft} data-answer-id="2" data-answer-weight="300">
                      <img className={classseImage} src={studio2} alt="Site internet avec Blog"/>
                      <span className="answer-text">Site internet avec Blog</span>
                  </GridItem>
                  <GridItem xs={12} sm={2} className={classes.marginLeft} data-answer-id="3" data-answer-weight="300">
                      <img className={classseImage} src={studio3}alt="Site d'entreprise"/>
                      <span className="answer-text">Site d'entreprise</span>
                  </GridItem>
                  <GridItem xs={12} sm={2} className={classes.marginLeft} data-answer-id="4" data-answer-weight="750">
                      <img className={classseImage} src={studio4} alt="Site sur mesure"/>
                      <span className="answer-text">Site sur mesure</span>
                  </GridItem>
              </GridContainer>
            )
          },
          {
            tabButton: "3",
            tabContent: (
              <GridContainer data-question-id="2">
              <div className={classes.typo}>
                <h3 className={classes.title}>Quel design souhaitez-vous pour votre site ?</h3>
              </div>
                <GridItem sm={2} className={classes.marginLeft}>
              <div className="answer js--answer" data-answer-id="1" data-answer-weight="1.1">

              <img className={classseImage} src={work1} alt="Utiliser un modèle"/>
              <span className="answer-text">Utiliser un modèle</span>
              </div>
              </GridItem>
              <GridItem sm={2} className={classes.marginLeft}>
              <div className="answer js--answer" data-answer-id="2" data-answer-weight="1.5">

              <img className={classseImage} src={work2} alt="Design sur mesure"/>
              <span className="answer-text">Design sur mesure</span>
              </div>
              </GridItem>
              <GridItem sm={2} className={classes.marginLeft}>
              <div className="answer js--answer" data-answer-id="3" data-answer-weight="1">

              <img className={classseImage} src={work4} alt="Pas besoin de design"/>
              <span className="answer-text">Pas besoin de design</span>
              </div>
              </GridItem>
              <GridItem sm={2} className={classes.marginLeft}>
              <div className="answer js--answer" data-answer-id="4" data-answer-weight="1.25">

              <img className={classseImage} src={work5}alt="Je ne sais pas"/>
              <span className="answer-text">Je ne sais pas</span>
              </div>
              </GridItem>

              </GridContainer>
            )
          },
          {
            tabButton: "4",
            tabContent: (
              <GridContainer data-question-id="3" data-pph="false" >
                <div className={classes.typo}>
                    <h3 className={classes.title}>Quelle sera la taille de votre site ?</h3>
                </div>
                <GridItem sm={2} className={classes.marginLeft}>
                <div className="answer js--answer" data-answer-id="1" data-answer-weight="1">
                    
                    <img className={classseImage} src={studio1} alt="Petit : moins de 3 pages/50 produits"/>
                    <span className="answer-text">Petit : moins de 3 pages/50 produits</span>
                </div>
                </GridItem>
                <GridItem sm={2} className={classes.marginLeft}>
                    <div className="answer js--answer" data-answer-id="2" data-answer-weight="1.5">
                        
                        <img className={classseImage} src={studio2} alt="Moyen : moins de 10 pages/200 produits"/>
                        <span className="answer-text">Moyen : moins de 10 pages/200 produits</span>
                    </div>
                </GridItem>
                <GridItem sm={2} className={classes.marginLeft}>
                    <div className="answer js--answer" data-answer-id="3" data-answer-weight="3">
                        
                        <img className={classseImage} src={studio3} alt="Grand : plus de 10 pages/ 500 produits"/>
                        <span className="answer-text">Grand : plus de 10 pages/ 500 produits</span>
                    </div>
                </GridItem>
                <GridItem sm={2} className={classes.marginLeft}>
                    <div className="answer js--answer" data-answer-id="4" data-answer-weight="2">
                        
                        <img className={classseImage} src={studio4} alt="Je ne sais pas"/>
                        <span className="answer-text">Je ne sais pas</span>
                    </div>
                </GridItem>
              </GridContainer>
            )
          },
            {
            tabButton: "5",
            tabContent: (
              <GridContainer data-question-id="4" data-pph="false" >
              <div className={classes.typo}>
                <h3 className={classes.title}>Y aura-t-il des paiements sur votre site ?</h3>
              </div>
                <GridItem sm={2} className={classes.marginLeft}>
                  <div className="answer js--answer" data-answer-id="1" data-answer-weight="1.2">
                      
                      <img className={classseImage} src={work1} alt="Oui"/>
                      <span className="answer-text">Oui</span>
                  </div>
              </GridItem>
              <GridItem sm={2} className={classes.marginLeft}>
                  <div className="answer js--answer" data-answer-id="2" data-answer-weight="1">
                      
                      <img className={classseImage} src={work2} alt="Non"/>
                      <span className="answer-text">Non</span>
                  </div>
              </GridItem>
              <GridItem sm={2} className={classes.marginLeft}>
                  <div className="answer js--answer" data-answer-id="3" data-answer-weight="1.1">
                      
                      <img className={classseImage} src={work3} alt="Je ne sais pas"/>
                      <span className="answer-text">Je ne sais pas</span>
                  </div>
              </GridItem>
          </GridContainer>
            )
          } 
    ]}
    />
    </GridItem>
    </GridContainer>
  );
}