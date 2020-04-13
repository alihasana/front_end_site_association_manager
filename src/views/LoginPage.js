import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/PeleMeleAsso.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [validity, setValidity]= React.useState(false);
  const asso = useFormIput(validity);
  const email = useFormIput(validity);
  const password = useFormIput(validity);
  const [assoRegexp]= React.useState(/^([a-zA-Z]){2,15}$/)
  const [emailRegexp]= React.useState(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/)

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  //const [loginValidity, setloginValidity] = React.useState(false);

  React.useEffect(()=>{
    setValidity(assoRegexp.test(asso.value)? false : true);
    console.log("assoValidity: " + asso.validity);
    setValidity(emailRegexp.test(email.value)? false : true);
    console.log("emailValidity: " + email.validity);
  }, [assoRegexp, asso.value, asso.validity, emailRegexp, email.value, email.validity])

function useFormIput(){
  const [value, setValue] = React.useState();
  
  const handlChange = (e) => {
      setValue(e.target.value);
  }
  return {
    value,
    onChange: handlChange,
  }
}
const handleSubmit = (e) => {
  alert('Data weree submitted: ' + asso.value +" "+ email.value +" "+ password.value);
  e.preventDefault();
}
  
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Association Manager"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleSubmit} >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Bienvenue !</p>
                  <CardBody>
                    <CustomInput
                      labelText="Nom de l'assocation..."
                      id="asso"
                      pattern=""
                      {...asso}
                      formControlProps={{
                        error:asso.validity,
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      {...email}
                      validators={['required', 'isEmail']}
                      formControlProps={{
                        fullWidth: true,
                        error:true,
                        validators:['required', 'isEmail'],
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      formHelperTextProps={{
                        error:true,
                        helpertext:"l'adresse email est invalide !"
                      }}
                    />
                    <CustomInput
                      labelText="Mot de passe"
                      id="pass"
                      {...password}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter} >
                    <Button className={classes.button} simple color="linkColor" size="lg" type="submit">
                      Get started
                    </Button>
                    <Link to="/Landing-page">
                      <Button className={classes.button} color="linkColor" simple size="lg"> 
                      Inscrire mon association
                      </Button>
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
