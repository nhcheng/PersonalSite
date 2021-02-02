import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
import { Link } from "@reach/router";
import TopBanner from "../modules/TopBanner.js";
import HomeBackground from "../../img/PersonalBanner(2).png";

class Home extends Component {
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
          background={HomeBackground}
          // title="CHUN HEI SAMUEL LAM"
          title={(<> CHUN HEI <span className="home-banner-highlight"> SAMUEL </span> LAM </>)}
          content="I am a junior (third-year undergraduate student) at
          Imperial College London majoring in mathematics, currently 
          participating an exchange program at Massachusetts Institute
          of Technology."
          des="Taken in 2018 at the main entrance of Imperial College London.
          Credit to Daniel Lo."
        />
        <div className="home-block">
          <h2> As an applied mathematician...</h2>
          <p>
            I mainly work in theory of statistics - I am intrigued by how different areas of mathematics
            come together to develop theories of machine learning and bayesian computations. For instance,
            the Monte-Carlo technique in simulating posterior distributions in a bayesian inference problem
            is inspired by dynamics of particles in a potential well. I would like to study the statistical 
            properties of estimators arisen from machine learning algorithms, as well as efficiency of
            estimations of distributions.
          </p>
          <p>
            In addition, I am interested in stochastic analysis - in particular the connection between
            deterministic dynamical systems and stochastic differential equations (SDE). 
            It is a well-known fact that diffusions can be characterised
            by both partial differential equations (PDE) and SDE, but recent studies suggest 
            that diffusion might also be characterised by chaotic systems. I would like to explore
            how this connection might be used to establish better quantitative estimates of
            the solutions of diffusions. Currently I am also drawn to the study of return maps
            of chaotic systems.
          </p>
          <Link to="/math"> Click here for more details and publications. </Link>
          <p>
            My personal journey in mathematics began when I entered the HKCCCU Logos Academy (a comprehensive
            school in Hong Kong). I had participated various enrichment programs offered by the Hong Kong University
            of Science and Technology (HKUST) from Grade 8 to Grade 11. I then completed GCE A-Level and joined Imperial 
            College London at the age of 16.
          </p>
          <Link to="/mystory"> Click here to read my stories. </Link>
        </div>
        <div className="home-block">
          <h2> Outside of academia... </h2>
          <p>
            I am working on creating resources to enhance undergraudates' experiences in learning 
            computational mathematics and statistics. These include a book on multivariate analysis with
            demonstration in Julia language, and a repository of numerical methods. I am also a peer
            tutor at Imperial College helping current freshmen (first-year undergraudates) to adopt
            university life in a rapidly-changing Covid-19 situation.
          </p>
          <p>
            In addition, I enjoy performing music (mainly by playing piano), building Minecraft architectures, 
            exploring Christianity and developing webpages.
          </p>
          <p> <Link to="/christianity"> Click here for my engagement in church. </Link> </p>
          <p> <Link to="/eca"> Click here for other extra-curricular engagements. </Link> </p>
        </div>
        </>
    );
  }
}

export default Home;
