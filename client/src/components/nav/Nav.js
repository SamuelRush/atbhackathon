import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import classes from './Nav.module.scss';
import MenuToggle from './menuToggle/MenuToggle';
import NavItems from './nav-items/NavItems';
import SideDrawer from './sideDrawer/SideDrawer';

class Nav extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Box className={classes.navbar} boxShadow={8}>
          <MenuToggle onClick={this.sideDrawerToggleHandler} />
          <Link to="/">
            <div className={classes.navbar__logo}>$chmo$</div>
          </Link>
          <div className={classes.navbar__list}>
            <NavItems />
          </div>
          <div className={classes.navbar__right}>
            <button className={classes.btn}>
              <Link to='/#'>Logout</Link>
            </button>
          </div>
        </Box>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          onClick={this.sideDrawerClosedHandler}
        />
      </>
    );
  }
}
export default Nav;
