import React, { Component } from "react";

import "../../utilities.css";
import "./CourseList.css";

// apparently hardcoding list of courses for now...

class CourseList extends Component {
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
        <div className="u-block">
          <h3> Year 3 (MIT Exchange) </h3>
          <div> <h4 className="u-nomargin"> 2021 Independent Activities Period (IAP): </h4>
            <div className="achieve-course-grid"> 
              <div className="u-nomargin"> <h5 className="u-nomargin"> Attended: </h5> 
              <ul className="u-nomargin">
                <li> 6.148 WebLab </li>
                <li> 6.S087 Multivariate Methods for Multidimensional Statistics </li>
                </ul></div>
              <div className="u-nomargin"> <h5 className="u-nomargin"> Attended as a Listener: </h5> 
              <ul className="u-nomargin">
                <li> 6.S191 Deep Learning </li>
                </ul></div>
            </div>
          <div> <h4 className="u-nomargin"> 2020 Fall: </h4>
            <div className="achieve-course-grid"> 
              <div> <h5 className="u-nomargin"> Attended: </h5> 
              <ul className="u-nomargin">
                <li> 18.103 Fourier Analysis </li>
                <li> 18.338 Eigenvalues of Random Matrices </li>
                <li> 18.353 Non-Linear Dynamics: Chaos </li>
                <li> 18.675 Theory of Statistics </li>
                </ul></div>
              <div> <h5 className="u-nomargin"> Attended as a Listener: </h5> 
              <ul className="u-nomargin">
                <li> 18.155 Differential Analysis I </li>
                </ul></div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-block">
          <h3 className="u-nomargin"> Year 2 </h3>
          <div> <h4 className="u-nomargin"> 2020 Spring: </h4>
            <div className="achieve-course-grid"> 
              <div className="u-nomargin"> <h5 className="u-nomargin"> Attended: </h5> 
              <ul className="u-nomargin">
                <li> Differential Equation </li>
                <li> Introduction to Numerical Analysis (Revisited) </li>
                <li> Complex Analysis </li>
                <li> Metric Spaces and Topology </li>
                </ul></div>
              <div className="u-nomargin"> <h5 className="u-nomargin"> Attended as a Listener: </h5> 
              <ul className="u-nomargin">
                <li> Probability Theory </li>
                <li> Statistical Theory </li>
                <li> Introduction to Statistical Learning </li>
                <li> Multivariate Analysis </li>
                </ul></div>
            </div>
          <div> <h4 className="u-nomargin"> 2019 Fall: </h4>
            <div className="achieve-course-grid"> 
              <div> <h5 className="u-nomargin"> Attended: </h5> 
              <ul className="u-nomargin">
                <li> Multivariate Calculus (Revisited) </li>
                <li> Real Analysis </li>
                <li> Algebra II </li>
                <li> Probability of Statistics II (Revisited) </li>
                </ul></div>
              <div> <h5 className="u-nomargin"> Attended as a Listener: </h5> 
              <ul className="u-nomargin">
                <li> Introduction to Partial Differential Equations </li>
                <li> Measure and Integration </li>
                <li> Time Series Analysis </li>
                </ul></div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-block">
          <h3 className="u-nomargin"> Year 1 </h3>
          <div> <h4 className="u-nomargin"> 2019 Spring: </h4>
            <div className="achieve-course-grid"> 
              <div className="u-nomargin"> <h5 className="u-nomargin"> Attended: </h5> 
              <ul className="u-nomargin">
                <li> Mechanics </li>
                <li> Mathematical Methods II </li>
                <li> Analysis I </li>
                <li> Algebra I </li>
                </ul></div>
              <div className="u-nomargin"> <h5 className="u-nomargin"> Attended as a Listener: </h5> 
              <ul className="u-nomargin">
                <li> Introduction to Numerical Analysis </li>
                <li> Statistical Modelling I </li>
                </ul></div>
            </div>
          <div> <h4 className="u-nomargin"> 2018 Fall: </h4>
            <div className="achieve-course-grid"> 
              <div> <h5 className="u-nomargin"> Attended: </h5> 
              <ul className="u-nomargin">
                <li> Foundation of Analysis </li>
                <li> Mathematical Methods I </li>
                <li> Geometry and Linear Algebra </li>
                <li> Probability and Statistics I </li>
                </ul></div>
              <div> <h5 className="u-nomargin"> Attended as a Listener: </h5> 
              <ul className="u-nomargin">
                <li> Multivariate Calculus </li>
                <li> Probability and Statistics II </li>
                </ul></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CourseList;