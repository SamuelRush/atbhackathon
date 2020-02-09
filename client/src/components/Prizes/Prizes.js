import React from "react";
import classes from "./prize.module.scss";
import Button from "@material-ui/core/Button";

export default function Prizes() {
  return (
    <React.Fragment>
      <h2 className="Cheading" style={{ textAlign: "center" }}>
        Prizes
      </h2>
      <div className={classes.PrizeContainer}>
        <div className={classes.prize}>
          <h5>Housing</h5>
          <h6>Goal: 2000</h6>
          <h6 style={{ color: "green", fontWeight: 400, margin: 0 }}>Actual Spending: 1900</h6>
          <Button variant="contained" color="primary" className={classes.prizeButton}>
            Claim Prize
          </Button>
        </div>
        <div className={classes.prize}>
          <h5>Entertainment</h5>
          <h6>Goal: 100</h6>
          <h6 style={{ color: "red", fontWeight: 400, margin: 0 }}>Actual Spending: 700</h6>
          <Button variant="contained" color="secondary" className={classes.prizeButton}>
            Try Again
          </Button>
        </div>
        <div className={classes.prize}>
          <h5>Grocery</h5>
          <h6>Goal: 250</h6>
          <h6 style={{ color: "green", fontWeight: 400, margin: 0 }}>Actual Spending: 100</h6>
          <Button variant="contained" color="primary" className={classes.prizeButton}>
            CLaim Prize
          </Button>
        </div>
        <div className={classes.prize}>
          <h5>Food</h5>
          <h6>Goal: 600</h6>
          <h6 style={{ color: "green", fontWeight: 400, margin: 0 }}>Actual Spending: 560</h6>
          <Button variant="contained" color="primary" className={classes.prizeButton}>
            CLaim Prize
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
