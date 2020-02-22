import React, { Component } from "react";
import Bmi from "./Bmi";
import Goal from "./Goal";
import Graph from "./Graph";
import HistoryList from "./history/HistoryList";
import User from "./User";
import AddWeight from "./AddWeight";
import app from "../../firebase";
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

  weightAdded = (e, kg, date) => {
    console.log(kg, date);

    e.preventDefault();
    this.state.user.weight.push({ kg: kg, date: date });
    this.setState({ add: false });
  };

  render() {
    if (this.state.add) {
      return <AddWeight addWeight={this.weightAdded} />;
    } else {
      return (
        <React.Fragment>
          <div className="btn-bottom__container">
            <button className="add-weight__btn" onClick={this.addWeight}>
              Add weight
            </button>
            <button
              className="add-weight__btn"
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </button>
          </div>
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
