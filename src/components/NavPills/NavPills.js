import React,{useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {ParallaxButton} from 'react-parallax-button';
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-kit-react/components/navPillsStyle.js";

const useStyles = makeStyles(styles);

export default function NavPills(props) {
  const [active, setActive] = useState(props.active);
  const [selected, setSelected] = useState(0);
  const [inputError, setError] = useState(props.error);
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

  const handleSubmit = () => {

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
