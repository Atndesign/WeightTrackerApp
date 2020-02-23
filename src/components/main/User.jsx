import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <header className="header">
        <p className="header__greeting"> Hello {this.props.username} </p>
      </header>
    );
  }
}

export default User;
