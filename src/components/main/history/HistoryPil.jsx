import React, { Component } from "react";

class HistoryPil extends Component {
  render() {
    return (
      <div className="historyPil">
        <div className="historyPil__left">
          {/* <p className="historyPil-right__date">{this.props.day}</p> */}
        </div>
        <div className="historyPil__right">
          <p className="historyPil-right__weight">{this.props.weight}</p>
        </div>
      </div>
    );
  }
}

export default HistoryPil;
