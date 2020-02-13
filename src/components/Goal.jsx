import React, { Component } from "react";

class Goal extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        higher: 75,
        current: 65,
        goal: 52
      }
    };
    this.progressBar = React.createRef();
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
          <div
            width={this.progressBar.width}
            className="progressBar__fluid"
          ></div>
        </div>
      </div>
    );
  }
}

export default Goal;
