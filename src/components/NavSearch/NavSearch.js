import React from 'react';
// nodejs library that concatenates classes
import { Link } from "react-router-dom";
import windowSize from 'react-window-size';

// @material-ui/core components
import {makeStyles} from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";

import Search from "@material-ui/icons/Search";

// code component
import CustomInput from "components/CustomInput/CustomInput.js";

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
                this.setState({isOpen: false});
                clearInterval(searchInterval);
                return false;
            }
            this.setState(prevSate => {
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
                formControlProps={{
                fullWidth: true
                }}
                white
                htmlColor="white"
                onClick={searchOffHandler}
                inputProps={{
                endAdornment: (
                    <Link to={"/profile-page"} >
                        <InputAdornment position="end" htmlColor="white"> 
                            <Search />
                        </InputAdornment>
                    </Link>
                )
                }}
                />
            </div>
            );

    }

export default windowSize(NavSearch);