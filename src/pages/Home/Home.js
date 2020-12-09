import React from "react";

import { userIsNotAuthenticated } from "../../redux/HOCs";
import Login from "../../components/loginForm/LoginForm"
import "./home.css"


class Home extends React.Component {
  state ={
    isAuthenticated: false
  }
    render() {
        return (
          <div>

            <Login />
            <button className="registerButton">
             
            </button>
         
          </div>
        );
    }
}
 //<div className="hulk"></div>
export default userIsNotAuthenticated(Home);