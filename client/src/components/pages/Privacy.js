import React, { Component } from "react";

import "../../utilities.css";
import "./Privacy.css";
import TopBanner from "../modules/TopBanner.js";
import PrivacyBackground from "../../img/PrivacyBanner.png";

class Privacy extends Component {
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
          background={PrivacyBackground}
          // title="CHUN HEI SAMUEL LAM"
          title={(<span className="privacy-highlight"> PRIVACY </span>)}
          content={(<>We take your privacy seriously. We have spare no effort to
          ensure our webpage complies with the <i> General Data Protection 
            Regulation (GDPR)</i> set by the European Union. Please read the 
            following details on your right and responsibilities. Please email me
            for any complaints concerning your privacy. </>)}
          des="Charing Cross, London, UK."
        />
        <div className="privacy-container">
            <div className="privacy-bodycontainer">
              <h1> This is Teaching </h1>
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
        </div>
      </>
    );
  }
}

export default Privacy;