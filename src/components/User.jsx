import React, { Component } from "react";

class User extends Component {
  state = {
    username: "Lily",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
  };
  render() {
    return (
      <header>
        <div className="profilePic">
          <img
            className="profilePic__img"
            src={this.state.avatar}
            alt=""
            width="30px"
          />
        </div>
        <p>Hello {this.state.username}</p>
      </header>
    );
  }
}

export default User;
