import React from "react";
import Chart from "react-google-charts";
import classes from "./hero.module.scss";
export default function GoalChart(props) {
  const data = [
    ["Expenditure", "Remaining"],
    ["a", 600],
    ["b", 400]
  ];
  const options = {
    pieHole: 0.4,
    is3D: false,
    legend: "none"
  };
  return (
    <div className={classes.wrapper}>
      <h2 className="Cheading">Goals</h2>
      <h6 style={{ marginBottom: 0 }}>{props.category}</h6>
      <Chart chartType="PieChart" width="100%" height="250px" data={data} options={options} />
    </div>
  );
}
