import React, { Component } from "react";

class Bmi extends Component {
  state = {
    weight: 69,
    isHealthy: true
  };
  render() {
    return (
      <div>
        <h2 className="section-title">BMI calculator</h2>
        <div className="bmi">
          <p className="bmi__state">
            <b>{this.state.weight}</b>{" "}
            {this.state.isHealthy && "You're doing good 🏆"}
          </p>
          <div className="bmi__indicator">
            <div className="bmi-indicator__slider"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bmi;
