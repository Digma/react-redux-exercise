import React from "react";
import { BarChart } from "react-easy-chart";

// Local data
const localData = [
  {
    x: "blue",
    y: 0,
    color: "blue"
  },
  {
    x: "red",
    y: 0,
    color: "red"
  },
  {
    x: "green",
    y: 0,
    color: "green"
  }
];

// TODO#1: Make ClickBarChart get its input data from redux state
export class ClickBarChart extends React.Component {
  render() {
    // Documentation: https://www.npmjs.com/package/react-easy-chart
    return <BarChart axes data={localData} />;
  }
}
