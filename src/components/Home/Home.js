import React from "react";
import LoginForm from "../loginForm/LoginForm";
import Menu from "../menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";
import RegistrationForm from "../registrationForm/RegistrationForm";
import "./home.css"

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Menu />
                <h1>Almost Twitter</h1>
                <LoginForm />
                <hr />
                

            </div>
        );
    }
}

export default userIsNotAuthenticated(Home);