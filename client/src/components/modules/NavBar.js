import React, { Component } from "react";
import { Link } from "@reach/router";
// import MyGoogle from "./MyGoogle.js";

import "../../utilities.css";
import "./NavBar.css";

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
                  Home
              </Link>
              {/* <Link to="/mystory" className="NavBar-link">
                  My Story
              </Link> */}
              <Link to="/teaching" className="NavBar-link">
                  Teaching
              </Link>
              <Link to="/research" className="NavBar-link">
                  Research
              </Link>
              <Link to="/christianity" className="NavBar-link">
                  Religion
              </Link>
              <Link to="/eca" className="NavBar-link">
                  ECA
              </Link>
            </div>
            <div className="NavBar-linkContainer u-inlineBlock">
              <Link to="/achieve" className="NavBar-link">
                  Resume
              </Link>
              <Link to="/publication" className="NavBar-link">
                  Publication
              </Link>
            {/* <MyGoogle handleLogin={this.props.handleLogin}
            handleLogout={this.props.handleLogout}
            userId={this.props.userId} /> */}
            </div>
        </nav>
      </>
    );
  }
}

export default NavBar;