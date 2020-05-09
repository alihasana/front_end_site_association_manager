import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/components/firstBgHeaderStyle.js";

const useStyles = makeStyles(styles);

export default function FirstBgHeader(props) {

  const {className,style, image, small } = props;
  const classes = useStyles();
  const headerClasses = classNames({
    [classes.header]: true,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return (
    <div
      className={headerClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
      }}
    >
    </div>
  );
}

FirstBgHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};
