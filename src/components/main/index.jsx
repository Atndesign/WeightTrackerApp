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
        height: 189,
        gender: "male",
        weight: [
          {
            kg: 100,
            date: "21 february 2020"
          },
          {
            kg: 99,
            date: "22 february 2020"
          },
          {
            kg: 98,
            date: "23 february 2020"
          },
          {
            kg: 94,
            date: "24 february 2020"
          },
          {
            kg: 90,
            date: "25 february 2020"
          }
        ],
        goal: 80
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
          <Bmi weightList={this.state.user.weight} user={this.state.user} />
          <HistoryList weightList={this.state.user.weight} />
        </React.Fragment>
      );
    }
  }
}

export default Main;
