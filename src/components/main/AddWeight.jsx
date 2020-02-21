import React, { Component } from "react";

class AddWeight extends Component {
  state = {
    weight: 0,
    date: ""
  };

  handleUpdate(value, stateInput) {
    this.setState({
      [stateInput]: value
    });
  }
  render() {
    return (
      <div className="addWeight">
        <div className="container">
          <h2 className="addWeight__title">New weight</h2>
          <label className="addWeight__label" htmlFor="newWeight">
            New weight:
          </label>
          <input
            value={this.state.weight}
            className="form-control addWeight__inputs"
            id="newWeight"
            type="number"
            placeholder="type your weight ex: 50,22"
            required
            onChange={e => this.handleUpdate(e.target.value, "weight")}
          />
          <label className="addWeight__label" htmlFor="dateWeight">
            Date:
          </label>
          <input
            value={this.state.date}
            className="form-control addWeight__inputs"
            id="dateWeight"
            type="date"
            required
            onChange={e => this.handleUpdate(e.target.value, "date")}
          />
          <button
            onClick={e =>
              this.props.addWeight(e, this.state.weight, this.state.date)
            }
            className="submit-btn"
            type="submit"
          >
            Sumbit
          </button>
        </div>
      </div>
    );
  }
}

export default AddWeight;
