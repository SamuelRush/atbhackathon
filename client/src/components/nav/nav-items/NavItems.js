import React from 'react';
import classes from './NavItems.module.scss';
import { Link } from 'react-router-dom';

const NavbarItems = () => {
  return (
    <ul className={classes.menu}>
      <div className={classes.menu_mobile}>
        <li className={classes.item}>
          <Link className={classes.link_text} to='/#'>
            Accounts
          </Link>
        </li>
      </div>
      <div className={classes.menu_mobile}>
        <li className={classes.item}>
          <Link className={classes.link_text} to='/#'>
            Settings
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default NavbarItems;
