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
      add: false
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
          <User />
          <Graph />
          <Goal />
          <Bmi />
          <HistoryList />
        </React.Fragment>
      );
    }
  }
}

export default Main;
