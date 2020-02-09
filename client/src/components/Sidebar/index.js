import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.scss';

const Link = ({children, ...props}) => (
  <NavLink
    activeClassName={classes.active}
    exact
    {...props}
  >{children}</NavLink>
)

const Sidebar = () => (
  <aside className={classes.sidebar} style={{ "gridArea": "menu", minWidth: 225, backgroundColor: 'teal', padding: "80px 0px"}}>
    <ul>
      <li className={classes.item}>
        <Link className={classes.link_text} to='/'>
          Dashboard
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link_text} to='/plan'>
          Financial Plan
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link_text} to='/rewards'>
          Rewards
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link_text} to='/settings'>
          Settings
        </Link>
      </li>
    </ul>
  </aside>
)

export default Sidebar;
