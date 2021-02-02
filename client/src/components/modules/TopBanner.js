import React, { Component } from "react";

import "../../utilities.css";
import "./TopBanner.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param background
 * @param title
 * @param content
 */

class TopBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
        <div className="topbanner" style={{
            backgroundImage: `url("${this.props.background}")`}}>
            <div className="topbanner-bodycontainer">
                <h1 className="topbanner-title"> {this.props.title} </h1>
                <p className="top-content"> {this.props.content}
                </p>
            </div>
        </div>
    );
  }
}

export default TopBanner;