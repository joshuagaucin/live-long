import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className="Menu">
        <Link to="/profile/:username"><h1>Live Long</h1></Link>

        {this.props.userIsNotAuthenticated && (
          <div className="login-signup">
            <button>
              <Link className="login" to="/login">
                login
              </Link>
            </button>
            <button>
              <Link className="signUp" to="/Registration">
                sign up
              </Link>
            </button>
          </div>
        )}

        {this.props.isAuthenticated && (
          <div className="dropdown">
            <button className="dropbtn">
              <h1>Menu</h1>
            </button>
            <div className="dropdown-content">
              <Link to="/profile/:username">Home</Link>
              <Link to="/chat">Chat Room</Link>
              <Link to="/recipeSearch">Recipes</Link>
              <Link to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default  withAsyncAction (
  "auth",
  "logout"
)(Menu);
