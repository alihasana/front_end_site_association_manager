import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
//import { container } from "assets/jss/material-kit-react.js";

import SectionAds from "./views/Sections/SectionAds";
import bannerData from "./service/data/dataJsonAnnonce.json";

import backgroundImage from "assets/img/bg4.jpeg";

// pages for this product
import HomePage from "views/HomePage.js";
import LoginPage from "views/LoginPage.js";
import LandingPage from "views/LandingPage.js";
import ProfilePage from "views/ProfilePage";
import FirstBgHeader from "components/FirstBgHeader/FirstBgHeader.js";
  
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <FirstBgHeader small image={backgroundImage}>
    </FirstBgHeader>
    <SectionAds 
      elements={bannerData.ads.map(data =>({
                  title: data.title,
                  image: data.imageUrl}))
                }/>
    <Switch> 
      <Route path="/profile-page" component={ProfilePage} /> 
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
