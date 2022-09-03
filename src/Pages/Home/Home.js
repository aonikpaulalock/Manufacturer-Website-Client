import React from 'react';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import Clients from './Clients';
import Project from './Project';
import Reviews from './Reviews';
import Summery from './Summery';
import Tools from './Tools';
import WhyChoose from './WhyChoose';

const Home = () => {
  return (
    <div>
      <Banner/>
      <WhyChoose/>
      <Tools/>
      <Project/>
      <Clients/>
      <Summery/>
      <Reviews/>

    </div>
  );
};

export default Home;