import React from "react";
import { ParallaxButton} from 'react-parallax-button';
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
import CustomInput from "components/CustomInput/CustomInput";



import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);


export default function RegistrationSection() {
  const classes = useStyles();

  function dynamicform(e) {
    e.preventDefault();

  }
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
                onClick={dynamicform} 
              />
            </InputAdornment>
          )
        }}
      />
      </GridItem>
    </GridContainer>
  );
}