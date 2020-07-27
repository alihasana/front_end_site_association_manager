import React from "react";
import axios from "axios";
// @material-ui/core components
import {Checkbox, FormControlLabel, makeStyles} from "@material-ui/core";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/contactUsStyle.js";

const useStyles = makeStyles(styles);

export default function ContactUsSection(props) {
  const classes = useStyles();
  const {descriptionText, idUs} = props

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      return await axios.get("/send-email/", {idUs});
    } catch (error) {
      return error;
    }
  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nous Contacter</h2>
          <h4 className={classes.description}>
          {descriptionText}
          Contactez-nous pour toute collaboration future. Nous vous répondrons dans quelques heures.
          </h4>
          <form onSubmit={handleSubmit} >
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre Noms"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Votre Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={12}>
                <FormControlLabel
                    control={
                      <Checkbox
                          name="acceptCondition"
                          color="primary"
                      />
                    }
                    label="En utilisant ce formulaire, vous acceptez le stockage et la gestion de vos données par ce site *"
                />
              </GridItem>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary" type="submit">Envoyez</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
