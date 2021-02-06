import React, { Component } from "react";

import "../../utilities.css";
import "./CourseList.css";

// apparently hardcoding list of courses for now... will be organised later.

/**
 * @param isExpanded
 * @param name
 */

class YearTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    /* Expand or Collapse */
    let pm = ""
    if (this.props.isExpanded === true) {
      pm = "-"
    } else {
      pm = "+"
    }

    return (
      <div className="courselist-title">
        <div className="courselist-title-left"> <h3 className="u-nomargin"> {this.props.name} </h3> </div>
        <div className="courselist-title-right"> <h3 className="u-nomargin"> {pm} </h3> </div>
      </div>
    )
  }
}

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandyr3: false,
      expandyr2: false,
      expandyr1: false,
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <div className="u-block">
          <YearTitle name="Year 3 (Exchange)" isExpanded={this.state.expandyr3} />
          <div className="courselist-year-container"> <h4 className="u-nomargin"> 2021 Independent Activities Period (IAP): </h4>
            <div className="courselist-grid"> 
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
            <div className="courselist-grid"> 
              <div> <h5 className="u-nomargin"> Attended: </h5> 
              <ul className="u-nomargin">
                <li> 18.103 Fourier Analysis (Revisited) </li>
                <li> 18.338 Eigenvalues of Random Matrices </li>
                <li> 18.353 Non-Linear Dynamics: Chaos </li>
                <li> 18.675 Theory of Probability (Revisited) </li>
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
          <YearTitle name="Year 2" isExpanded={this.state.expandyr3} />
          <div className="courselist-year-container"> <h4 className="u-nomargin"> 2020 Spring: </h4>
            <div className="courselist-grid"> 
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
            <div className="courselist-grid"> 
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
          <YearTitle name="Year 1" isExpanded={this.state.expandyr3} />
          <div className="courselist-year-container"> <h4 className="u-nomargin"> 2019 Spring: </h4>
            <div className="courselist-grid"> 
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
            <div className="courselist-grid"> 
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