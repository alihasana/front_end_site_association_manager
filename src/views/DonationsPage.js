import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components


import styles from "assets/jss/material-kit-react/views/homePage.js";


const useStyles = makeStyles(styles);

export default function DonationsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Text>
        texte
      </Text>
    </div>
  )
}