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
      <div className="Christian-container">
          <div className="Christian-bodycontainer">
            <h1> This is Christian </h1>
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

export default Christian;
