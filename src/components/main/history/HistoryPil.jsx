import React, { Component } from "react";

class HistoryPil extends Component {
  state = {
    isMoreThanBefore: true,
    weight: 0
  };
  // componentDidMount() {
  //   this.weightLost();
  // }
  // weightIndicator() {
  //   if (this.state.isMoreThanBefore && "+") {
  //     return (
  //       <p className="historyPil-right__comparaison --green">
  //         {this.state.weight}
  //       </p>
  //     );
  //   } else {
  //     return (
  //       <p className="historyPil-right__comparaison --red">
  //         {this.state.weight}
  //       </p>
  //     );
  //   }
  // }
  // weightLost() {
  //   let weight =
  //     this.props.weightList[this.props.index] -
  //     this.props.weightList[
  //       this.props.weightList.length - (this.props.index - 1)
  //     ];
  //   this.setState({
  //     weight: weight
  //   });
  // }
  render() {
    return (
      <div className="historyPil">
        <div className="historyPil__left">
          <p className="historyPil-right__date">{this.props.day}</p>
        </div>
        <div className="historyPil__right">
          <p className="historyPil-right__weight">{this.props.weight}</p>
        </div>
      </div>
    );
  }
}

export default HistoryPil;
