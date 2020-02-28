import React from 'react';
// nodejs library that concatenates classes
import windowSize from 'react-window-size';

// @material-ui/core components
import {makeStyles} from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";

import Search from "@material-ui/icons/Search";

// code component
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/customInputStyle.js";

const useStyles = makeStyles(styles);

function NavSearch(props) {

    const classes = useStyles();

    const  state = {
        searchWidth: (props.windowWidth < 992) ? 90 : 0,
        searchString: (props.windowWidth < 992) ? '200px' : 'Max',
        isOpen: (props.windowWidth < 992)
    };

    let searchClass = ['main-search', classes.input];
    if (state.isOpen) {
        searchClass = [...searchClass, 'open'];
    }

    let searchOffHandler = () => {
        const searchInterval = setInterval(() => {
            if (state.searchWidth < 0) {
                React.setState({isOpen: false});
                clearInterval(searchInterval);
                return false;
            }
            React.setState(prevSate => {
                return {
                    searchWidth: prevSate.searchWidth - 15,
                    searchString: prevSate.searchWidth + 'px'
                }
            });
        }, 35);
    };
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
                onClick={searchOffHandler}
                inputProps={{
                    endAdornment: (                  
                            <InputAdornment style={{marginBottom:"15px"}} position="end"> 
                                <Button justIcon round color="white">
                                    <Search className={classes.searchIcon} textColor="primary" />
                                </Button>
                            </InputAdornment>
                    )
                    }}
                />
            </div>
            );

    }

export default windowSize(NavSearch);