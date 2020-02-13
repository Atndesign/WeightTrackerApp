import React, { Component } from "react";
import HistoryPil from "./HistoryPil";

class HistoryList extends Component {
  state = {
    data: [
      {
        day: "today",
        weight: 68,
        bmi: 23
      },
      {
        day: "yesterday",
        weight: 70,
        bmi: 26
      },
      {
        day: "10 oct 2018",
        weight: 68,
        bmi: 24
      }
    ]
  };
  render() {
    return (
      <div>
        <h2 className="section-title">History</h2>
        {this.state.data.map(e => {
          return <HistoryPil />;
        })}
      </div>
    );
  }
}

export default HistoryList;
