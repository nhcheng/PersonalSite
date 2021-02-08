import React, { Component } from "react";

import "../../utilities.css";
import "./Achieve.css";

import TopBanner from "../modules/TopBanner.js";
import ImageFlex from "../modules/ImageFlex.js";

import ResumeBackground from "../../img/ResumeBanner.png";
import {EducationList} from "../../data/Resume/Education.js";
import ResumePDF from "../../data/Resume/CV_2021_Jan_V3.pdf";
import CourseList from "../modules/CourseList.js";

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
          You can also read my full Curriculum Vitae <a href={ResumePDF}>here.</a></>}
          des="Taken in 2018 during final presentation of Year 1 Research Project.
          The project aims to predict tumor growth by bayesian computations. A high
          score of 98% is achieved in this project."
        />
        <div className="u-block">
          <h2> Education </h2>
          {EducationList.map((item) => { return (
              <ImageFlex key={item.key} imageandDes={item}/>)
            })}
        </div>
        <div className="u-block">
          <h2> Languages </h2>
          <p> <b> Native: </b> Chinese, Cantonese; <b> Fluent: </b> English </p>
        </div>
        <div className="u-block">
          <h2> Coding Skills </h2>
          <p> To be completed </p>
        </div>
        <div className="u-block">
          <h2> Courses Hall of Fame </h2>
        </div>
        <CourseList />
      </>
    );
  }
}

export default Achieve;
