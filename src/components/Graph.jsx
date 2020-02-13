import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  state = {
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
        data: [30, 40, 45, 50, 49, 60, 70, 91, 91, 91, 91].reverse()
      }
    ]
  };
  render() {
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
  }
}

export default Graph;
