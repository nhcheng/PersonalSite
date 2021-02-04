import React, { Component } from "react";

import "../../utilities.css";
import "./Publication.css";
import TopBanner from "../modules/TopBanner.js";
import PublicationBackground from "../../img/PublicationBanner.png";

import Stats from "../../data/Publication/Statistics_II.pdf";
import RMTPDF from "../../data/Publication/18_338_Final_Project.pdf";
import RMTPres from "../../data/Publication/18_338_Presentation.pdf";
// import RMTNote from "../../data/Publication/18_338_Final_Notebook.html";
import PWSPDF from "../../data/Publication/18_353_Pilot_Wave_System.pdf";
import UROP1 from "../../data/Publication/UROP_Task_1.pdf";
import UROP2 from "../../data/Publication/UROP_Task_2.pdf";
import M1RPDF from "../../data/Publication/M1R_Poster.pdf";
import M1RPres from "../../data/Publication/M1R_Slides.pdf";

class Publication extends Component {
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
          background={PublicationBackground}
          title={(<span className="publication-highlight"> PUBLICATION </span>)}
          content={(<>Here is a list of writings in mathematics. They are mainly Expository
          papers, but I am working towards publishing a book and further resources. </>)}
          des="Return map of Pilot Wave system - taken from 18.353 final project."
        />
        <div className="u-block">
            <h2> Book/Notes </h2>
                <ul>
                <li> <b>(In progress)</b> Theory of Classical Statistics II: Regression and Multivariate Analysis with demonstration in Julia. <a
                    href={Stats} target="_blank"> Chapter 1-3 </a></li>
                <li> <b>(In progress)</b> Mathematics Computing Demonstration <a href="https://github.com/ImperialCollegeLondon/Mathematical-Computing-Demo" target="_blank"> Github Repository </a> </li>
                </ul>
            <h2> Expository Paper </h2>
            <p>Some miscellaneous informal expository writings on math. They are mainly my coursework.</p>
            <h4>Year 3 @MIT</h4>
                <ul>
                    <li>Empirical Distribution Theory (with S. Im), 2020. (Final project of course 18.675 Theory of Probability) <b>Available upon request.</b></li>
                    <li>Computation of Empirical Measure, 2020. (Final project of course 18.338 Random Matrices) <a href={RMTPDF} 
                    target="_blank">PDF Notes</a>, <a href={RMTPres} target="_blank">Slides</a></li> {/* <a href={RMTNote} target="_blank">Full Notes</a>, */}
                    <li>Characterising Chaos in Pilot Wave System, 2020. (Final project of course 18.353 Non-Llinear Dynamics I: Chaos). <a 
                    href={PWSPDF}>Notes</a></li>
                </ul>
            <h4>Year 1/2 @Imperial</h4>
                <ul>
                    <li>Enhanced Diffusion Process. 2020. (supervised by M. Coti-Zelati) (2nd year UROP) <a href={UROP1} target="_blank">Stage 1</a>, <a href={UROP2}>Stage 2</a> completed. Stage 3 to be resumed after more studies on backward SDE.</li>
                    <li>A Retrospective Analysis of Governmental Interventions to COVID-19, 2020. (with H. Liu et. al. supervised by A. Duncan) (2nd year research project) <b>Available upon request.</b></li>
                    <li>Simple Application of Approximate Bayesian Computation (ABC) in Modelling Tumor Growth, 2019. (supervised by A. Duncan) (1st year research project) <a href={M1RPDF}>Poster</a>, <a href={M1RPres}>Slides</a></li>
                </ul>
        </div>
      </>
    );
  }
}

export default Publication;