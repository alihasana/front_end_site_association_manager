import React, {useState} from "react";
import {ParallaxButton} from 'react-parallax-button';
// import { makeUseAxios } from 'axios-hooks';
// import axios from 'axios';
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

import dataJson from 'service/data/dataJsonDidacticiel.json';

import styles from "assets/jss/material-kit-react/views/landingPageSections/registerStyle.js";

 
/* const useAxios = makeUseAxios({
  axios: axios.create({dataJson})
}) */
const useStyles = makeStyles(styles);

export default function RegistrationSection() {
  const classes = useStyles();
  const images = [studio1,studio2,studio3,studio4];

  const classseImage = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
  )
  const dataFormQ = 
   <NavPills
      tabs= {dataJson.data.map(data => { if (data.choix.length===0) 
        return {
          tabButton: data.id.toString(),
          tabContent: (
            <GridContainer className={classes.container} data-question-id={data.id} key={data.id.toString()}>
              <div className={classes.typo}>
                <h2 className={classes.title}>{data.question}</h2>
              </div>
                <GridItem xs={12} key={data.id} data-answer-id={data.id} data-answer-weight="300">
                <CustomInput
                labelText="Remplir"
                id="AssosType"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment className={classes.inputAdornment} position="end">
                      <Button className={classes.button} simple size="sm" >
                      <ParallaxButton className={"fab fa-list-alt"}
                        text="Confirmer"
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
                      </Button>
                    </InputAdornment>
                  )
                }}
              />
              </GridItem>
          </GridContainer>
          )
        }
        else
        return {
          tabButton: data.id.toString(),
          tabContent: (
            <GridContainer className={classes.container} data-question-id={data.id} key={data.id.toString()}>
              <div className={classes.typo}>
                <h2 className={classes.title}>{data.question}</h2>
              </div>
              <GridContainer className={classes.container}>
              {data.choix.map((element,index) => {
                let smValue = 6  
                if (data.choix.length>=3){
                    smValue = 4
                }  
                return <GridItem xs={12} sm={smValue} key={index} className={classes.margin} data-answer-id={index} data-answer-weight="300">
                  <img className={classseImage} src={images[index]} alt=""/>
                  <span className="answer-text">{element}</span>
                </GridItem>
                }
            )}
            </GridContainer>
          </GridContainer>
          )
        }
      })
      }
    />

/* //    const [{ data, loading, error }, refetch] = useAxios();
    const [{ data, loading, error }] = useAxios();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>; */

  return (
    {/* <button onClick={refetch}>refetch</button> */},
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */},
    <GridContainer className={classes.container}>
      <GridItem>
        {dataFormQ}
      </GridItem>
    </GridContainer>
  );
}