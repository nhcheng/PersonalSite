import React, { Component } from "react";

import "../../utilities.css";
import TopBanner from "../modules/TopBanner.js"
import "./Mystory.css";
import myStoryBackground from "../../img/myStoryBanner.png";

class Mystory extends Component {
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
          background={myStoryBackground}
          title={<>MY <span className="mystory-highlight"> STORY </span></>}
          content="Explore my exploration of mathematics and 
          how my belief in God shape my life."
          des={(<> Taken in 2020 right before I return to UK at the
          <i> "Instagram Pier" </i> in Hong Kong. Credit to Vincent Chung. </>)}
        />
      <div className="mystory-container">
          <div className="mystory-bodycontainer">
            <h1> This is Mystory </h1>
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

export default Mystory;
