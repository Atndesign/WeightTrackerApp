import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightList: [],
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        fill: {
          colors: ["#59E1FF", "#E91E63", "#9C27B0"]
        },
        xaxis: {
          lines: {
            show: false
          },
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
            }
          }
        },
        grid: {
          borderColor: "#16172e",
          strokeDashArray: 0
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          name: "series-1",
          data: this.weightList
        }
      ]
    };
  }
  componentDidMount() {
    this.objToArray();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.weightList !== this.props.weightList) {
      this.objToArray();
    }
  }
  objToArray = () => {
    let list = [];
    this.props.weightList.map(e => list.push(e.Kg));
    this.setState({
      series: [
        {
          name: "series-1",
          data: list.reverse()
        }
      ]
    });
  };
  render() {
    if (this.state.weightList) {
      return (
        <Chart
          className="weightChart"
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="150"
          width={document.innerWidth}
        />
      );
    } else {
      return <div>Loading datas</div>;
    }
  }
}

export default Graph;
