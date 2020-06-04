import React from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeroSlider from '../HeroSlider';
import Navbar from '../Navbar';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


const Home = () => {


  const AutoplaySlider = withAutoplay(AwesomeSlider);


  const slider = (
    <AwesomeSlider bullets={false}>
      <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/20.jpeg" />
      <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/3.jpeg" />
      <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/23-3.jpeg'/>
      <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/23-3-scaled.jpeg'/>
      <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/22-scaled.jpeg'/>
      <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/21-scaled.jpeg"/>
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