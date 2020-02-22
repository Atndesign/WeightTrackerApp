import React, { Component } from "react";
import HistoryPil from "./HistoryPil";

class HistoryList extends Component {
  state = {
    weights: []
  };
  componentDidUpdate(prevProps) {
    if (prevProps.weightList !== this.props.weightList) {
      this.setState({
        weights: this.props.weightList
      });
    }
  }
  render() {
    return (
      <div>
        <h2 className="section-title">History</h2>
        {this.state.weights.reverse().map((e, index) => {
          return <HistoryPil key={e.Kg} weight={e.Kg} index={index} />;
        })}
      </div>
    );
  }
}

export default HistoryList;
