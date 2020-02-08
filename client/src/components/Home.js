import React, { useEffect, useContext } from 'react';
import DataContext from '../context/data/dataContext';
import Transactions from '../components/Transactions';

const Home = () => {
  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>Home page</h2>
      <Transactions />
    </div>
  );
};

export default Home;
