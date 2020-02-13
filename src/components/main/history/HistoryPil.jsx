import React, { Component } from "react";

class HistoryPil extends Component {
  state = {
    isMoreThanBefore: true
  };

  render() {
    return (
      <div className="historyPil">
        <div className="historyPil__left">
          <p className="historyPil-right__date">Today</p>
          <p className="historyPil-right__comparaison">
            {(this.state.isMoreThanBefore && "+") ||
              (!this.state.isMoreThanBefore && "-")}
            15kg
          </p>
        </div>
        <div className="historyPil__right">
          <p className="historyPil-right__weight">62.5</p>
        </div>
      </div>
    );
  }
}

export default HistoryPil;
