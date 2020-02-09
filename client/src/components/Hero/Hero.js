import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chart from "react-google-charts";
import GoalChart from "./GoalChart";
import customClasses from "./hero.module.scss";

export default function Hero() {
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
    ["Grocery", 250],
    ["Insurance", 600],
    ["Medical", 2900],
    ["Entertainment", 8200]
  ];

  const userData = [
    ["Name", "expenditure"],
    ["Grocery", 370],
    ["Insurance", 4200],
    ["Medical", 700],
    ["Entertainment", 1500]
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
