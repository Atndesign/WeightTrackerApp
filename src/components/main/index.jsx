import React, { Component } from "react";
import Bmi from "./Bmi";
import Goal from "./Goal";
import Graph from "./Graph";
import HistoryList from "./history/HistoryList";
import User from "./User";
import AddWeight from "./AddWeight";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      user: {
        username: "Kevin",
        height: 180,
        gender: "male",
        weight: [100, 150, 120, 110, 111, 88],
        goal: 80,
        bmi: 69
      }
    };
  }

  addWeight = () => {
    this.setState({ add: true });
  };

  render() {
    if (this.state.add) {
      return <AddWeight />;
    } else {
      return (
        <React.Fragment>
          <button className="add-weight__btn" onClick={this.addWeight}>
            Add weight
          </button>
          <User username={this.state.user.username} />
          <Graph weightList={this.state.user.weight} />
          <Goal
            weightList={this.state.user.weight}
            goal={this.state.user.goal}
          />
          <Bmi />
          <HistoryList />
        </React.Fragment>
      );
    }
  }
}

export default Main;
