import React, { Component } from "react";

import "../../utilities.css";
import "./Teaching.css";
import TeachingBackground from "../../img/TeachingBanner.png";
import TopBanner from "../modules/TopBanner.js";

class Teaching extends Component {
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
          background={TeachingBackground}
          title={<span className="teaching-highlight"> TEACHING </span>}
          content={<> I am currently a peer tutor at Imperial College London.
          You can read my teaching resources here. </>}
          des="Clore Lecture Theatre -- the main lecture theatre 
          for Department of Mathematics at Imperial College London."
        />  
      <div className="teaching-container">
          <div className="teaching-bodycontainer">
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

export default Teaching;
