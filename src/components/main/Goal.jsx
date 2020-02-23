import React, { Component } from "react";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: {
        width: ""
      }
    };
    this.progressBar = React.createRef();
  }
  componentDidMount() {
    this.setState({
      progress: {
        width: this.calculateProgression()
      }
    });
  }

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
          <p className="progress-sm">{Math.max(...this.props.weightList)}</p>
          <p className="progress-current">
            {console.log(
              this.props.weightList[this.props.weightList.length - 1].Kg
            )}
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
