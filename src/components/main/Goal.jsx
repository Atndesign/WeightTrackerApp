import React, { Component } from "react";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        higher: Math.max(this.props.weightList),
        current: this.props.weightList[this.props.weightList.length - 1],
        goal: this.props.goal
      },
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
    let startKg = this.props.weightList[0];
    let endKg = this.props.goal;
    let current = this.props.weightList[this.props.weightList.length - 1];

    let distance = endKg - startKg;
    let progress = endKg - current;

    return (progress / distance) * 100;
  }
  render() {
    return (
      <div>
        <div className="progress-labels">
          <p className="progress-sm">{this.state.user.higher}</p>
          <p className="progress-current">{this.state.user.current}</p>
          <p className="progress-sm">{this.state.user.goal}</p>
        </div>
        <div ref={this.progressBar} className="progressBar">
          <div className="progressBar__fluid"></div>
        </div>
      </div>
    );
  }
}

export default Goal;
