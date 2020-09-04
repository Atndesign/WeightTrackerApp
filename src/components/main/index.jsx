import React, { Component } from "react";
import Bmi from "./Bmi";
import Goal from "./Goal";
import Graph from "./Graph";
import HistoryList from "./history/HistoryList";
import User from "./User";
import AddWeight from "./AddWeight";
import UserStorage from "../loggin/UserStorage";
import { Redirect } from "react-router";
const userStorage = new UserStorage();

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: userStorage.load("username"),
        goal: userStorage.load("goal"),
        height: userStorage.load("height"),
      },
      weights: [
        {
          Kg: 80,
        },
      ],
    };
  }
  addWeight = () => {
    this.setState({ add: true });
  };

  weightAdded = (e, kg, date) => {
    e.preventDefault();
    const newWeight = { Kg: kg, Date: date };
    this.state.weights.push(newWeight);
    console.log(this.state.weighs);
    userStorage.save("weights", JSON.stringify(this.state.weights));
    this.setState({ add: false });
  };
  componentWillMount() {
    if (userStorage.load("weights")) {
      this.setState({ weights: JSON.parse(userStorage.load("weights")) });
    }
  }

  render() {
    if (!userStorage.load("username")) {
      return <Redirect to="/login" />;
    }
    if (this.state.weights) {
      console.log(this.state.weights);
      if (this.state.add) {
        return <AddWeight addWeight={this.weightAdded} />;
      } else {
        return (
          <React.Fragment>
            <div className="btn-bottom__container">
              <button className="add-weight__btn" onClick={this.addWeight}>
                Add weight
              </button>
            </div>
            <User username={this.state.user.username} />
            <Graph weightList={this.state.weights} />
            <Goal weightList={this.state.weights} goal={this.state.user.goal} />
            <Bmi weightList={this.state.weights} user={this.state.user} />
            <HistoryList weightList={this.state.weights} />
          </React.Fragment>
        );
      }
    } else {
      return <div>loading datas...</div>;
    }
  }
}

export default Main;
