import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Label,
  
  Message,
} from "semantic-ui-react";
import Menu from "../menu/Menu"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="container">
        <Menu userIsNotAuthenticated={this.props.userIsNotAuthenticated} />
      
      <div className="LoginForm">
        <Form id="login-form" onSubmit={this.handleLogin}>
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
            type="text"
            name="password"
            required
            onChange={this.handleChange}
          />
          <Button className="loginButton" type="submit" disabled={loading}>
            Login
          </Button>
          <Button className="registerButton">
            <Message>
              <Link className="signUp" to="/Registration">
            Not a Member? Sign up now!
              </Link>
            </Message>
          </Button>
        </Form>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);