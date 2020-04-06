import React from 'react';
// nodejs library that concatenates classes

// @material-ui/core components
import {makeStyles} from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";

import Search from "@material-ui/icons/Search";

// code component
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/customInputStyle.js";

const useStyles = makeStyles(styles);


export default function NavSearch() {

    const classes = useStyles();

    let searchClass = ['main-search', classes.input];
        return (
            <div id="main-search" className={searchClass.join(' ')}>
                <CustomInput
                labelText="Rechercher une association . . ."
                id="m-search"
                input
                inputRootCustomClasses={classes.inputRootCustomClasses}
                formControlProps={{
                    className: classes.formControl,
                    fullWidth: true
                }}
                white
                inputProps={{
                    endAdornment: (                  
                            <InputAdornment className={classes.inputAdornment} position="end"> 
                                <Button justIcon round color="white">
                                    <Search className={classes.searchIcon} color="primary" />
                                </Button>
                            </InputAdornment>
                    )
                    }}
                />
            </div>
            );

    }
