import React from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import swiperConfig from '../Home/swiperConfig';

import Slide from '../../components/molecules/Slide';
import Hero from '../Home/sections/Hero';
import Skills from '../Home/sections/Skills';
import Work from '../Home/sections/Work';

import 'swiper/src/swiper.scss';
import '../Home/_home.scss';

interface ITest {
  children?: React.ReactNode;
  className?: string;
}

export const Test: React.FC<ITest> = ({ children, className }) => {
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Feature page of React.js Boilerplate application" />
      </Helmet>
      <Swiper {...swiperConfig}>
        <Slide slideTheme="white" slideType="div">
          <Work />
        </Slide>
        <Slide slideTheme="light" slideType="div">
          <Skills />
        </Slide>
        <Slide slideTheme="white" slideType="section">
          <Hero />
        </Slide>
      </Swiper>
    </div>
  );
};

export default Test;
