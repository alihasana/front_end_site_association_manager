import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import BannerSection from "./views/Sections/BannerSection.js";

// pages for this product
import HomePage from "views/HomePage.js";
import LoginPage from "views/LoginPage.js";
import LandingPage from "views/LandingPage.js";
import ProfilePage from "views/ProfilePage";
import Parallax from "components/Parallax/Parallax.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Parallax small>
      <BannerSection />
    </Parallax>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} /> 
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
