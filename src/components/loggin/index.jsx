import React, { Component } from "react";

class LogginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="login__title">WeightTracker</h1>
        <form className="login" action="">
          <label className="login__label" htmlFor="username">
            Username
          </label>
          <input id="username" className="login__inputs" type="text" />
          <label className="login__label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="login__inputs --password"
            type="password"
          />
          <button className="submit-btn" type="submit">
            Log in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LogginPage;
