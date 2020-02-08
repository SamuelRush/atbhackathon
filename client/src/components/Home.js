import React, { useEffect, useContext } from 'react';
import DataContext from '../context/data/dataContext';
import Navbar from './nav/Nav';

const Home = () => {
  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navbar />
      <h2>Home page</h2>
    </div>
  );
};

export default Home;
