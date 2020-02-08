import React, { useEffect, useContext } from "react";
import DataContext from "../context/data/dataContext";
import Hero from "./Hero/Hero";
import Navbar from "./nav/Nav";

const Home = () => {
  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.getData();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
