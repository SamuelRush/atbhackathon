import React from "react";

import NavItems from "../nav-items/NavItems";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../backdrop/Backdrop";


const sideDrawer = props => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} onClick={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.wrapper}>
          <button className={classes.close_btn} onClick={props.onClick}>
            <span></span>
          </button>
          <div className={classes.logo}>SchmoS</div>
          <nav className={classes.nav}>
            <NavItems onClick={props.onClick} />
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
