import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";

import DataService from "../services/dataService";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { Button, Form, Label, Message } from "semantic-ui-react";
import { userIsNotAuthenticated } from "../../redux/HOCs";
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      displayName: "",
    };
    this.client = new DataService();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.client.registerUser(this.state).then((result) => {
      const loginData = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.login(loginData);
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div>
        <Menu userIsNotAuthenticated={this.props.userIsNotAuthenticated} />

        <div className="RegistrationForm">
          <Form id="registration-form" onSubmit={this.handleRegistration}>
            <Label htmlFor="username">Username</Label>
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <Label htmlFor="password">Password</Label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <Label htmlFor="displayName">Display Name </Label>
            <input
              type="text"
              name="displayName"
              required
              onChange={this.handleChange}
            />
            <div className="buttons">
              <Button type="submit" disabled={loading}>
                Register
              </Button>
              <Message>
                <Link className="login" to="/Login">
                  Already have an account?
                </Link>
              </Message>
            </div>
          </Form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(
  withAsyncAction("auth", "login")(RegistrationForm)
);
