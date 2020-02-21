import React, { Component } from "react";
import HistoryPil from "./HistoryPil";

class HistoryList extends Component {
  state = {
    weight: [80, 76, 78],
    data: this.props.weightList
  };
  render() {
    return (
      <div>
        <h2 className="section-title">History</h2>
        {this.state.data.reverse().map((e, index) => {
          return (
            <HistoryPil
              weightList={this.state.weight}
              key={e.date}
              weight={e.kg}
              day={e.date}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default HistoryList;
