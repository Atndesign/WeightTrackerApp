import React, { Component } from "react";
import HistoryPil from "./HistoryPil";

class HistoryList extends Component {
  render() {
    return (
      <div className="history-list">
        <h2 className="section-title">History</h2>
        {this.props.weightList.reverse().map((e, index) => {
          return <HistoryPil key={e.Kg} weight={e.Kg} index={index} />;
        })}
      </div>
    );
  }
}

export default HistoryList;
