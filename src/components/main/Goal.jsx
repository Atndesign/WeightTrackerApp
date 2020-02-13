import React, { Component } from "react";

class Goal extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        higher: 75,
        current: 65,
        goal: 52
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
        width: "50"
      }
    });
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
