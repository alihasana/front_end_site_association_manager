import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
/* import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite"; */
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/logo_restau_coeur.svg";

import imageSite from "assets/img/img_restos_du_coeur.jpg";
/* import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg"; */

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import ParallaxWrapper from "react-parallax-button/ParallaxWrapper";
import ParallaxButton from "react-parallax-button/ParallaxButton";
import WorkSection from "./Sections/WorkSection";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div>
      <Header
        color="transparent"
        brand="Association Manager"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={imageSite}/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Les Restaurants du coeur</h3>
                    <div>
                    <Button justIcon href="https://www.restosducoeur.org/" className={classes.margin0}>
                      <i className={"fas fa-globe"} />
                    </Button>
                    <Button justIcon href="https://twitter.com/restosducoeur?lang=fr" className={classes.margin0}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon href="https://www.instagram.com/restos.du.coeur/" className={classes.margin0}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon href="https://www.facebook.com/restosducoeur/?fref=ts" className={classes.margin0}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button justIcon href="https://www.youtube.com/user/LesRestosduCoeur" className={classes.margin0}>
                      <i className={"fab fa-youtube"} />
                    </Button>
                    <Button justIcon href="https://www.linkedin.com/company/restos-du-coeur" className={classes.margin0}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button justIcon href="https://www.restosducoeur.org/contact" className={classes.margin0}>
                      <i className={"fas fa-envelope"} />
                    </Button>
                    </div>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
            <h6 className={classes.title}>Qui Sommes-nous?</h6>
              <p>
              Fondés par Coluche en 1985, les Restos du Cœur est une association loi de 1901, reconnue d’utilité publique, sous le nom officiel de « les Restaurants du Cœur – les Relais du Cœur ». Ils ont pour but « d’aider et d’apporter une assistance bénévole aux personnes démunies, notamment dans le domaine alimentaire par l’accès à des repas gratuits, et par la participation à leur insertion sociale et économique, ainsi qu’à toute action contre la pauvreté sous toutes ses formes ».{" "}
              </p>
            </div>
           
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <ParallaxWrapper parallaxScale={0.15}>
                  <img src={imageSite} alt="" className={navImageClasses}/> 
                </ParallaxWrapper>

                <ParallaxButton
                  text="Faire un Don"
                  parallaxScale={0.7}
                  backgroundStyle={{  
                    background: 'linear-gradient(right, #0038F0, #0DBD5C)',  
                    borderRadius: '8px',  
                    boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'  
                  }}
                  onClick={() => setClassicModal(true)} 
                />
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Faire un Don</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <GridItem>
                      <CustomInput
                        labelText="Valeur du don ponctuel"
                        pattern="[0-9]*"
                        id="font-awesome"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <i className="fas fa-euro-sign" />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        pattern="[0-9]*"
                        labelText="Valeur du don mensuel"
                        id="font-awesome"
                        formControlProps={{
                          error:true,
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <i className="far fa-calendar-alt" />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                  <Link to={"/"} className={classes.link}>
                    <Button color="primary" default>
                      Valider et payer                    
                    </Button>
                  </Link>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
                {/* <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />*/}
              </GridItem>
            </GridContainer>              
          </div>
        </div>
        <div>
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
