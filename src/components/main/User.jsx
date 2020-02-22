import React, { Component } from "react";

class User extends Component {
  state = {
    username: this.props.username
  };
  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.setState({
        username: this.props.username
      });
    }
  }
  render() {
    return (
      <header className="header">
        <p className="header__greeting"> Hello {this.state.username} </p>
      </header>
    );
  }
}

export default User;
