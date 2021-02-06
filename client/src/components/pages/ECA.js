import React, { Component } from "react";

import "../../utilities.css";
import "./ECA.css";
import TopBanner from "../modules/TopBanner.js";
import ECABackground from "../../img/ECABanner.png"

class ECA extends Component {
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
          background={ECABackground}
          // title="CHUN HEI SAMUEL LAM"
          title={<> <span className="ECA-highlight"> Extra-curricular </span> Engagements </>}
          content="Here is a summary of extra-curricular activites I have 
          participated for the last few years"
          des={<> Taken in 2018 during a rehearsal of <i> Imperial College 
            DramSoc</i> production of drama <i> And Then There Were None</i>.
            I was a Deputy Stage Manager in that production. Credit to Daniel Lo.</>}
        />
        <div className="u-block">
            <h1> This is ECA </h1>
            <h2> What we provide in this skeleton</h2>
            <ul>
            <li>Google Auth (Skeleton.js & auth.js)</li>
            <li>User Model (auth.js & user.js)</li>
            </ul>
            <h2> What you need to change</h2>
            <ul>
            <li>Change the font in utilities.css</li>
            <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
            <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
            <li>Change the Database SRV for Atlas (server.js)</li>
            <li>Change the Database Name for MongoDB (server.js)</li>
            <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
            <li>Update website title in client/dist/index.html</li>
            </ul>
          </div>
      </>
    );
  }
}

export default ECA;
