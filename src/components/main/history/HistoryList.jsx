import React, { Component } from "react";
import HistoryPil from "./HistoryPil";

class HistoryList extends Component {
  state = {
    weights: []
  };
  render() {
    return (
      <div className="history-list">
        <h2 className="section-title">History</h2>
        {this.state.weights.reverse().map((e, index) => {
          return <HistoryPil key={e.Kg} weight={e.Kg} index={index} />;
        })}
      </div>
    );
  }
}

export default HistoryList;
