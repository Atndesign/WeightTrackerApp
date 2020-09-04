import React, { Component } from "react";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: "",
      progress: {
        width: "",
      },
    };
    this.progressBar = React.createRef();
  }
  componentDidMount() {
    this.getHigher();
    this.setState({
      progress: {
        width: this.calculateProgression(),
      },
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.weightList !== this.props.weightList) {
      this.getHigher();
      this.calculateProgression();
    }
  }
  getHigher = () => {
    let list = [];
    this.props.weightList.map((e) => list.push(e.Kg));
    this.setState({
      max: Math.max(...list),
    });
  };

  calculateProgression() {
    let startKg = this.props.weightList[0].Kg;
    let endKg = this.props.goal;
    let current = this.props.weightList[this.props.weightList.length - 1].Kg;

    let distance = endKg - startKg;
    let progress = endKg - current;
    return (progress / distance) * 100;
  }
  render() {
    return (
      <div>
        <div className="progress-labels">
          <p className="progress-sm">{this.state.max}</p>
          <p className="progress-current">
            {this.props.weightList[this.props.weightList.length - 1].Kg}
          </p>
          <p className="progress-sm">{this.props.goal}</p>
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
