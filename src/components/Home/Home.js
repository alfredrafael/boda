import React from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../../logo.svg";
import HeroSlider from '../HeroSlider';
import Navbar from '../Navbar';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

const Home = () => {

  const slider = (
    <AwesomeSlider cssModule={AwsSliderStyles}>
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );

  return(
    <div style={{color: 'black'}}>
    <HeroSlider />
    <div style={{height: '100vh'}}>
    <h1> Welcome </h1>
    {slider}
  

    </div>
  </div>
)};


export default Home;