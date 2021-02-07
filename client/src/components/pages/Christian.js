import React, { Component } from "react";

import "../../utilities.css";
import "./Christian.css";
import TopBanner from "../modules/TopBanner.js";
import ChristianBackground from  "../../img/ReligionBanner.png";

class Christian extends Component {
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
      <TopBanner 
          background={ChristianBackground}
          title={(<> THE NEW <span className="Christian-highlight"> LIFE </span></>)}
          content="I am a Christian and I enjoy exploring how our belief in God's
          salvation changes lives and creates impact in society. I have engages in various churches
          and Christian Unions."
          des={<> Taken in 2018 April when I baptised at my home church - <i> Oi 
            Kwan Road Baptist Church</i>. Credit to the members of choir.</>}
        />
      <div className="u-block">
          <h2> So what do we believe? </h2>
          <p>
            </p>
          <h2> Engagements </h2>
          <h2> Notes </h2>
        </div>
      </>
    );
  }
}

export default Christian;
