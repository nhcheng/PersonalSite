import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./NavBar.css";

const GOOGLE_CLIENT_ID = "405384603408-sa99spi7lqpr247fsstocelfvtln9nnn.apps.googleusercontent.com";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <nav className="NavBar-container">
            <div className="NavBar-title u-inlineBlock">
              <Link to="/" className="NavBar-link">
                  ChunHei Lam
              </Link>
            </div>
            <div className="NavBar-linkContainer u-inlineBlock">
              <Link to="/teaching" className="NavBar-link">
                  Teaching
              </Link>
              <Link to="/mystory" className="NavBar-link">
                  My Story
              </Link>
              <Link to="/achieve" className="NavBar-link">
                  Resume
              </Link>
              <Link to="/math" className="NavBar-link">
                  Math
              </Link>
              <Link to="/christianity" className="NavBar-link">
                  Religion
              </Link>
              <Link to="/eca" className="NavBar-link">
                  ECA
              </Link>
            {this.props.userId ? (
              <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={this.props.handleLogout}
                onFailure={(err) => console.log(err)}
                className="NavBar-link NavBar-login"
              />
            ) : (
              <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={this.props.handleLogin}
                onFailure={(err) => console.log(err)}
                className="NavBar-link NavBar-login"
              />
            )}
            </div>
        </nav>
      </>
    );
  }
}

export default NavBar;