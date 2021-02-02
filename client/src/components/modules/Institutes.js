import React, { Component } from "react";

import "../../utilities.css";
import "./Institutes.css";

class Institutes extends Component {
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
        <div className="institutes-imperial"> </div>
        <div className="institutes-mit"> </div>
      </>
    );
  }
}

export default Institutes;