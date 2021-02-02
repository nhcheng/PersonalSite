import React, { Component } from "react";
import { Link } from "@reach/router";
// import MyGoogle from "./MyGoogle.js";

import "../../utilities.css";
import "./BottomBanner.css";

class BottomBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="bottombanner-container">
        <div className="bottombanner-left"> 
          <div className="bottombanner-leftmain">
            <div className="bottombanner-logo">
                <div className="bottombanner-imperial"> </div>
                <div className="bottombanner-mit"> </div>
            </div>
            <div className="bottombanner-link">
                <Link to="/privacy">Privacy</Link> | <a href="https://accessibility.mit.edu/">Accessibility</a>
            </div>
          </div>
          <div className="bottombanner-description">
                The webpage is developed with the skeleton code provided by 
                the <a href="https://weblab.mit.edu/">MIT web.lab team</a>, and templates 
                by <a href="https://lochungtin.github.io/site/">Timothy Lo</a> and <a href="https://nhcheng.mit.edu/">Thomas Cheng</a>. 
                The code for this webpage is available in my GitHub.
          </div>
        </div>
        <div className="bottombanner-right"> 
            Email:
            <ul>
                <li> Imperial: chun.lam18@imperial.ac.uk </li>
                <li> MIT: chunhei@mit.edu </li>
                <li> Others: sammuelchlam@gmail.com </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default BottomBanner;