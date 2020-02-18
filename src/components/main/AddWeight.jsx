import React, { Component } from "react";

class AddWeight extends Component {
  state = {};
  render() {
    return (
      <div className="addWeight">
        <div className="container">
          <h2 className="addWeight__title">New weight</h2>
          <form action="POST">
            <label className="addWeight__label" htmlFor="newWeight">
              New weight:
            </label>
            <input
              className="form-control addWeight__inputs"
              id="newWeight"
              type="number"
              placeholder="type your weight ex: 50,22"
              required
            />
            <label className="addWeight__label" htmlFor="dateWeight">
              Date:
            </label>
            <input
              className="form-control addWeight__inputs"
              id="dateWeight"
              type="date"
              required
            />
            <button className="submit-btn" type="submit">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddWeight;
