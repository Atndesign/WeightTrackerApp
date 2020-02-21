import React, { Component } from "react";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      higher: null,
      current: this.props.weightList[this.props.weightList.length - 1].kg,
      goal: this.props.goal,
      progress: {
        width: ""
      }
    };
    this.progressBar = React.createRef();
    this.weightList = [];
  }

  componentDidMount() {
    this.props.weightList.map(e => this.weightList.push(e.kg));
    this.setState({
      higher: Math.max(...this.weightList),
      progress: {
        width: this.calculateProgression()
      }
    });
  }

  calculateProgression() {
    let startKg = this.props.weightList[0].kg;
    let endKg = this.props.goal;
    let current = this.props.weightList[this.props.weightList.length - 1].kg;

    let distance = endKg - startKg;
    let progress = endKg - current;

    return (progress / distance) * 100;
  }
  render() {
    return (
      <div>
        <div className="progress-labels">
          <p className="progress-sm">{this.state.higher}</p>
          <p className="progress-current">{this.state.current}</p>
          <p className="progress-sm">{this.state.goal}</p>
        </div>
        <div ref={this.progressBar} className="progressBar">
          <div
            className="progressBar__fluid"
            style={{ width: +(100 - this.state.progress.width) + "%" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Goal;
