import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css"
import loginForm from "../loginForm/LoginForm"
import RegistrationForm from "../registrationForm/RegistrationForm"
import InfiniteFeed from "../../pages/infiniteFeed/InfiniteFeed"
import Home from "../../pages/Home/Home";
import Main from "../../pages/Main/Main";


import 'semantic-ui-css/semantic.min.css';

  
             
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat" component={InfiniteFeed} />
          <Route exact path="/Registration" component={RegistrationForm} />
          <Route exact path="/login" component={loginForm} />
          <Route exact path="/profile/:username" component={Main} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
