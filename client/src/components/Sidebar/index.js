import React from 'react';

import classes from './Sidebar.module.scss';

const Sidebar = () => (
  <aside className={classes.sidebar} style={{ "gridArea": "menu", minWidth: 225, backgroundColor: 'teal', padding: "80px 40px"}}>
    <ul>
      <li>This are</li>
      <li>This are</li>
      <li>This are</li>
    </ul>
  </aside>
)

export default Sidebar;
