import React, { Component } from "react";
import Bmi from "./Bmi";
import Goal from "./Goal";
import Graph from "./Graph";
import HistoryList from "./history/HistoryList";
import User from "./User";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <User />
        <Graph />
        <Goal />
        <Bmi />
        <HistoryList />
      </React.Fragment>
    );
  }
}

export default Main;
