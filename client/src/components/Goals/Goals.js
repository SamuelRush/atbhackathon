import React, { useContext, useState } from 'react';
import classes from './Goals.module.scss';
import DataContext from '../../context/data/dataContext';
import GoalChart from '../Hero/GoalChart';

const Goals = () => {
  const dataContext = useContext(DataContext);
  const { upcomingGoals } = dataContext;

  const [showGoal, setGoals] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.goals}>
        <h2>Upcoming goals</h2>
        <ul className={classes.list}>
          {upcomingGoals.map(({ category, value }) => (
            <li className={classes.list_item}>
              <span className={classes.category}>{category}</span>
              <span className={classes.value}>{showGoal ? value : 0}</span>
            </li>
          ))}
        </ul>
        <div>
          <button className={classes.btn} onClick={() => setGoals(true)}>
            Auto Suggestion
          </button>
          <button className={classes.btn}>
            Change
          </button>
        </div>
      </div>
      <GoalChart category="Income" />
    </div>
  );
};

export default Goals;
