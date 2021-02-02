import React, { Component } from "react";

import "../../utilities.css";
import "./Math.css";
import TopBanner from "../modules/TopBanner.js";
import mathBackground from "../../img/MathBanner.png";

class Math extends Component {
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
          background={mathBackground}
          title={<> To the wonder of <span 
          className="math-banner-highlight"> Statistical 
          Learning </span> and <span
          className="math-banner-highlight"> Stochastic Analysis </span> </>}
          content="I study how the relation between dynamical systems and SDE can be
          utilised to establish quantitative results. I also study efficiency of  
          Bayesian Inferences and statistical properties of estimators arisen in
          machine learning algorithms."
          des={<> Samples from brownian bridge. The <i>Empirical Central Limit 
            Theorem</i> reveals that empirical process converges weakly to brownian 
            bridge as size of sample increases. Taken from 18.675 final paper with Shawn Im. </>}
        />
      <div className="math-container">
          <div className="math-bodycontainer">
            <h1> This is Home </h1>
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

export default Math;
