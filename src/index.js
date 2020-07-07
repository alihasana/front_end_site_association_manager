import React, {useState} from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
//import { container } from "assets/jss/material-kit-react.js";

import SectionAds from "./views/Sections/SectionAds";
import bannerData from "./service/data/dataJsonAnnonce.json";

import backgroundImage from "assets/img/bg4.jpeg";

// pages for this product
import HomePage from "views/HomePage.js";
import LoginPage from "views/LoginPage.js";
import LandingPage from "views/LandingPage.js";
import ProfilePage from "views/ProfilePage.js";
import FirstBgHeader from "components/FirstBgHeader/FirstBgHeader.js";
import AuthAPI from './auth/AuthAPI.js';
  
var hist = createBrowserHistory();
AuthAPI.setup();

const PrivateRoute = ({ children, ...rest }) => {
  const [isAuthenticated] = useState(AuthAPI.isAuthenticated) ;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated?
          children
        :
          <Redirect
            to={{
              pathname: "/login-page",
              state: { from: location }
            }}
          />
      }
    />
  );
}
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
      <PrivateRoute path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
