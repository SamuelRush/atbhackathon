import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chart from "react-google-charts";
import GoalChart from "./GoalChart";
import customClasses from "./hero.module.scss";

export default function Hero(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
  const classes = useStyles();
  const comparisionData = [
    ["Name", "expenditure"],
    ["Housing", 2032.12],
    ["Vehicle", 782.34],
    ["Food", 400.21],
    ["Entertainment", 893.00],
    ["Travel", 302.76],
    ["Health", 200.32],
    ["Fees", 40.00],
  ];

  const userData = [
    ["Name", "expenditure"],
    ["Housing", 1781.91],
    ["Vehicle", 4426.98],
    ["Food", 529.73],
    ["Entertainment", 1085.28],
    ["Travel", 2952.58],
    ["Health", 179.75],
    ["Fees", 135.2],
  ];

  const options = {
    legend: "none",
    diff: {
      oldData: {
        tooltip: {
          prefix: "Comparision"
        }
      },
      newData: {
        tooltip: {
          prefix: "User Data"
        }
      }
    }
  };

  const chartEvents = [
    {
      eventName: 'select',
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart()
        const selection = chart.getSelection()
        if (selection.length === 1) {
          const [selectedItem] = selection
          const dataTable = chartWrapper.getDataTable()
          const { row, column } = selectedItem
          console.log('row', row)
          if (row === 3) {
            alert('It looks like most people in your area do not have car leases with Ferrari. It may be worth looking at that to save money.')
          } else if (row === 9) {
            alert('It looks like most people in your area do not travel with Westjet. It may be worth decreasing travel to save money.')
          } else {
            alert("You're doing good in this category. Focus elsewhere for savings.")
          }
        }
      },
    },
  ]

  console.log('props', props)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <h2>Financial Summary</h2>
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              diffdata={{ old: comparisionData, new: userData }}
              options={options}
              chartEvents={chartEvents}
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className={customClasses.goalWrapper}>
              <GoalChart category="Income" />
              <GoalChart category="Medical" />
              <GoalChart category="Insurance" />
              <GoalChart category="Grocery" />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
