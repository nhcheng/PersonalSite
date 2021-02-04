import React, { Component } from "react";
import "./MyAlert.css";

/**
 * Prototype
 * @param {string} content
 * @param {string} alerttype
 */

class MyAlert extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
    let Content = null;

    if (this.props.alerttype === "green") {
        Content = (<div className="alert alert-green"> <p className="u-nomargin"> {this.props.content} </p> </div>);
    } else if (this.props.alerttype === "yellow") {
        Content = (<div className="alert alert-yellow"> <p className="u-nomargin"> {this.props.content} </p> </div>);
    } else if (this.props.alerttype === "red") {
        Content = (<div className="alert alert-red"> <p className="u-nomargin"> {this.props.content} </p> </div>);
    } else {
        Content = (<div className="alert"> <p className="u-nomargin"> {this.props.content} </p> </div>);
    }

      return (
        Content
      )
    }
  }

  export default MyAlert