import React,{useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {ParallaxButton} from 'react-parallax-button';
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-kit-react/components/navPillsStyle.js";
import axios from "axios";
import {toast} from "react-toastify";
import config from "../../config.json";

const useStyles = makeStyles(styles);

export default function NavPills(props) {

    const history = useHistory();
  const [active, setActive] = useState(props.active);
  const [selected, setSelected] = useState(0);
  const [inputError, setError] = useState(props.error);
  const [redirectToHome, setRedirect] = useState(false);
  const handleChange = (event, active) => {
    setActive(active);
    setSelected(active);

  };
  const handleChangeIndex = index => {
    setActive(index);
    setSelected(index);
  };

  const HandleNextTab = (event) =>{
    var newActive = active+1
      console.log('active');
      console.log(active);
      let data = localStorage.getItem('registration');
      if (data) {
          let items = JSON.parse(data);
          if (checkData(active+1, items)) {
              if (active<tabs.length-1) setActive(newActive);
              setError('');
          } else setError('Input est obligatorie')
      } else setError('Input est obligatorie')
  };
    const checkData = (dataID, items) => {
        let response = false;
        for (const item of items) {
            if (item.id === dataID) {
                console.log(dataID)
                console.log(item.id)
                response = true
            }
        }
        return response
    }


  const handlePrevTab = (event) =>{
    var newActive = active-1
      if (active > 0) setActive(newActive);
  };

    const redirectToFrontPage = () => {
        history.push("/");
    }

  const handleSubmit = async () => {
      let dataUser = await getdataUser();
      let logoUrl =  "https://firebasestorage.googleapis.com/v0/b/project1-8b52b.appspot.com/o/images%2Flogo.png?alt=media&token=8d69d058-29e9-4d11-893a-75f04905e417"

      let dataCreateUser = JSON.stringify(
          {
              "firstName":dataUser.first_name,
              "lastName":dataUser.last_name,
              "email":dataUser.email,
              "plainPassword":dataUser.password,
              "dataUsageAgreement":dataUser.accept_condition,
              "roles":["ROLE_ADMIN"]
          });
      console.log(dataCreateUser);
      let datacreateAssociation = JSON.stringify({
          "name":dataUser.association_name,
          "associationType":"Association loi de 1901",
          "dataUsageAgreement":true,
          "website":"http://www.association-manager/asso/postamn/validation",
          "email":dataUser.email,
          "firstName":dataUser.first_name,
          "lastName":dataUser.last_name,
          "assemblyConstituveDate":"07/06/2020",
          "createdAt":"09/01/2020 13:23:23",
          "logo": logoUrl,
          "createdBy":"/api/utilisateur/2/afficher"
      });

      let configUser = {
          method: 'post',
          url: 'https://association-manager.go.yj.fr/api/utilisateurs/creer',
          headers: {
              'Authorization': `Bearer ${config.jwt_token}`,
              'Content-Type': 'application/json'
          },
          data : dataCreateUser
      };
      axios(configUser)
          .then(function async (response) {
               console.log(JSON.stringify( response.data));
              let configAsso = {
                  method: 'post',
                  url: 'https://association-manager.go.yj.fr/api/associations/creer',
                  headers: {
                      'Authorization': `Bearer ${config.jwt_token}`,
                      'Content-Type': 'application/json',
                      'Cookie': 'sf_redirect=%7B%22token%22%3A%22f5cd9b%22%2C%22route%22%3A%22api_associations_POST_collection%22%2C%22method%22%3A%22POST%22%2C%22controller%22%3A%22api_platform.action.post_collection%22%2C%22status_code%22%3A201%2C%22status_text%22%3A%22Created%22%7D'
                  },
                  data : datacreateAssociation
              };
              axios(configAsso)
                  .then(function (response) {
                      console.log(JSON.stringify(response.data));
                      localStorage.clear();
                      setRedirect(true);
                      redirectToFrontPage();
                      toast.success("Votre association a été créée avec succès, veuillez vérifier votre email");
                  })
                  .catch(function (e1) {
                      console.log(e1);
                      toast(e1.violations[0].message)
                      redirectToFrontPage()
                      // eslint-disable-next-line no-unused-expressions

                  });
          })
          .catch(function (e2) {
              console.log(e2);
              // eslint-disable-next-line no-unused-expressions
              redirectToFrontPage();
              if (e2.violations === undefined) toast("Contactez Administrator par contactez nous")
             else toast(e2.violations[0].message)

          });
  }

  const getdataUser = async () => {
      let dataFromLocalStorage = await localStorage.getItem('registration');
      let items = JSON.parse(dataFromLocalStorage);
      let data = {};
      for (const item of items) {
          console.log(item)
          console.log(item.input)
          if (item.input === "first_name") data.first_name = item.response
          if (item.input === "association_name") data.association_name = item.response
          if (item.input === "last_name") data.last_name = item.response
          if (item.input === "age") data.age = item.response
          if (item.input === "email") data.email = item.response
          if (item.input === "password") data.password = item.response
          if (item.input === "association_type") data.association_type = item.response
          if (item.input === "is_local") data.is_local = item.response
          if (item.input === "is_member") data.is_member = item.response
          if (item.input === "accept_condition") data.accept_condition = 1
      }
      console.log(data);

      return data;
  }


  const classes = useStyles();
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (

    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (

          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}

    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop, key) => {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        })}

      </SwipeableViews>
      <GridContainer className={horizontal} >
        <GridItem xs={12} className={classes.buttonPrevious}>
          <Button className={classes.button} simple size="sm">
          <ParallaxButton
            text="Précédent"
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
            onClick={handlePrevTab}
          />
          </Button>
        </GridItem>
        <GridItem xs={12} className={classes.buttonNext}  >
            { ((active+1 === tabs.length) ?
            (<Button
                color="primary"
                size="lg"
                onClick={handleSubmit}>
                Enregistrer
            </Button>):

         ( <Button className={classes.button} simple size="sm">
          <ParallaxButton
            text= { (active+1 === tabs.length) ? "Enregistrer": "Suivant" }
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
            onClick={HandleNextTab}
          />
          </Button>))}
        </GridItem>
      </GridContainer>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  // index of the default active pill
  active: 0,
  color: "info"
};

NavPills.propTypes = {
  active: PropTypes.number,
  selected:PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};
