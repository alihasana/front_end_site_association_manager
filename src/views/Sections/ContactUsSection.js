import React,  { useState } from "react";
import axios from "axios";
import Joi from "@hapi/joi";
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
  let [name, setName] = useState('');
  let [nameError, setNameError] = useState('');
  let [email, setEmail] = useState('');
  let [emailError, setEmailError] = useState('');
  let [message, setMessage] = useState('');
  let [messageError, setMessageError] = useState('');
  let [acceptCondition, setAcceptCondition] = useState("");
  let [acceptConditionError, setAcceptConditionError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, message, acceptCondition)
    console.log("name, email, message, acceptCondition");
    console.log(name, email, message, acceptCondition);
    if (acceptCondition) {
      await setAcceptConditionError("");
      await setAcceptCondition("true");
    } else {
      await setAcceptConditionError("Veuillez vous accepter condition, si vous souhaite continuer")
      await setAcceptCondition("");
    }
    if (name && email && message && acceptCondition){
      console.log('get all data');
      try {
        return await axios.get("/send-email/", {idUs});
      } catch (error) {
        return error;
      }
    }
  }
  const handleInput = async data => {
    let inputId = data.target.id
    let inputValue = data.target.value
    if(inputId === 'message') {
      let {error, value} = Joi.string().min(10).max(250).required().validate(inputValue);
      if (error || value.replace(/<[^>]+>|\s/g, '') === ''){
        await setMessageError("Le message est obligatoire. Le texte doit contenir moins de 250 caractères et plus de 10 caractères")
        await setMessage("");
      } else {
        await setMessageError("");
        await setMessage((value.replace(/<[^>]+>/g, '')).trim());
      }
    }
    if(inputId === 'name') {
      let {error, value} = Joi.string().min(2).max(50).required().validate(inputValue);
      if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
        await setNameError("Le nom est obligatoire. Le texte doit contenir moins de 50 caractères et plus de 2 caractères")
        await setName("");
      } else {
        await setNameError("");
        await setName((value.replace(/<[^>]+>/g, '')).trim());
      }
    }
    if(inputId === 'email') {
      let {error, value} = Joi.string().email({ tlds: { allow: false } }).required().validate(inputValue);
      if (error || value.replace(/<[^>]+>|\s/g, '') === '') {
        await setEmailError("Le email est obligatoire")
        await setEmail("");
      } else {
        await setEmailError("");
        await setEmail((value.replace(/<[^>]+>/g, '')).trim());
      }
    }
    if(inputId === 'acceptCondition'){
      if (data.target.checked === true) {
        await setAcceptConditionError("");
        await setAcceptCondition("true");
      } else {
        await setAcceptConditionError("Veuillez vous accepter condition, si vous souhaite continuer")
        await setAcceptCondition("");
      }
    }
  };
  const feedback = (errorMessage) => (
      <div style={{color: '#db2269', fontSize: '15px', display: 'relative'}}>
        {errorMessage}
        <br/>
        <br/>
      </div>
  );
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
                  error={!(nameError === "")}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInput
                  }}
                />
                {nameError ? feedback(nameError) : ''}
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Votre Email"
                  id="email"
                  error={!(emailError === "")}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type:email,
                    onChange: handleInput
                  }}
                />
                {emailError ? feedback(emailError) : ''}
              </GridItem>
              <CustomInput
                labelText="Votre Message"
                id="message"
                error={!(messageError === "")}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: handleInput
                }}
              />
                {messageError ? feedback(messageError) : ''}
              <GridItem xs={12} sm={12} md={12}>
              <FormControlLabel
                    control={
                      <Checkbox
                          checked={!(acceptCondition === "")}
                          id="acceptCondition"
                          name="acceptCondition"
                          onChange={handleInput}
                          color="primary"
                      />
                    }
                    label="En utilisant ce formulaire, vous acceptez le stockage et la gestion de vos données par ce site *"
                />
                {acceptConditionError ? feedback(acceptConditionError) : ''}
              </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button color="primary" type="submit">Envoyez</Button>
                </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
