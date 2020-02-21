import React, { Component } from "react";
import HistoryPil from "./HistoryPil";

class HistoryList extends Component {
  state = {
    weight: [80, 76, 78],
    data: [
      {
        day: "12 oct 2018",
        weight: 68
      },
      {
        day: "11 oct 2018",
        weight: 70
      },
      {
        day: "10 oct 2018",
        weight: 80
      }
    ]
  };
  render() {
    return (
      <div>
        <h2 className="section-title">History</h2>
        {this.state.data.map((e, index) => {
          return (
            <HistoryPil
              weightList={this.state.weight}
              key={e.day}
              weight={e.weight}
              day={e.day}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default HistoryList;
