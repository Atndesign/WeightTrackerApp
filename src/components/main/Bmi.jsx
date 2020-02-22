import React, { Component } from "react";

class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: this.props.user.height,
      isHealthy: true,
      bmi: 0
    };
    this.maxBmi = 40;
    this.minBmi = 18.5;
  }
  componentDidMount() {
    if (this.props.weightList.length === 0) return;
    this.setState({
      weight: this.props.weightList[this.props.weightList.length - 1].kg
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.weightList !== this.props.weightList) {
      this.setState({
        weight: this.props.weightList[this.props.weightList.length - 1].Kg,
        height: this.props.user.height
      });
      this.calculateBmi();
    }
  }
  calculateBmi() {
    let bmi =
      this.props.weightList[this.props.weightList.length - 1].Kg /
      Math.pow(this.props.user.height / 100, 2);
    this.setState({ bmi: bmi.toFixed(2) });
  }
  getBmi() {
    if (this.state.bmi < 18.5) {
      return "insufficient weight :/";
    } else if (this.state.bmi > 18.9 && this.state.bmi < 24.9) {
      return "You're doing good 🏆";
    } else if (this.state.bmi > 25 && this.state.bmi < 29.9) {
      return "A little chubby";
    } else if (this.state.bmi > 30 && this.state.bmi < 39.9) {
      return "You should work out";
    } else if (this.state.bmi > 40) {
      return "DANGER ZONE";
    }
  }
  calculateProgression() {
    let startBmi = this.minBmi;
    let endBmi = this.maxBmi;
    let current = this.state.bmi;

    let distance = startBmi + endBmi;
    let progress = current + endBmi;
    let result = (progress / distance) * 100;
    if (result > 100 || result < 0) {
      result = 0;
      return result;
    } else {
      return result;
    }
  }
  render() {
    return (
      <div>
        <h2 className="section-title">BMI calculator</h2>
        <div className="bmi">
          <p className="bmi__state">
            <b>{this.state.bmi}</b> {this.getBmi()}
          </p>
          <div className="bmi__indicator">
            <div
              style={{ left: this.calculateProgression() + "%" }}
              className="bmi-indicator__slider"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bmi;
