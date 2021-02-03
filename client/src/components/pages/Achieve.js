import React, { Component } from "react";

import "../../utilities.css";
import "./Achieve.css";
import TopBanner from "../modules/TopBanner.js";
import ResumeBackground from "../../img/ResumeBanner.png"

class Achieve extends Component {
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
          background={ResumeBackground}
          title={<> <span className="achieve-highlight">RESUME</span> and Achievements </>}
          content={<> This page contains my general background and skills.
          You can also read my full Curriculum Vitae here.</>}
          des="Taken in 2018 during final presentation of Year 1 Research Project.
          The project aims to predict tumor growth by bayesian computations. A high
          score of 98% is achieved in this project."
        />
        <div className="achieve-container">
            <div className="achieve-bodycontainer">
              <h1> This is achievements </h1>
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

export default Achieve;
