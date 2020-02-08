import React, { useEffect, useContext } from 'react';
import DataContext from '../context/data/dataContext';
import Hero from './Hero/Hero'

const Home = () => {
  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.getData();
  }, []);
  return (
    <div>
      <h2>NavBar</h2>
      <Hero/>
    </div>
  );
};

export default Home;
