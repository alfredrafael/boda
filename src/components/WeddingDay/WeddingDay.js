import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactLogo from "../elements/ReactLogo";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const WeddingDay = () => {


  const AutoplaySlider = withAutoplay(AwesomeSlider);

  
  const slider = (
    <AwesomeSlider bullets={false}>
    <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/20.jpeg" />
    <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/3.jpeg" style={{height: '160%'}} />
    <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/23-3.jpeg'/>
    <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/23-3.jpeg'/>
    <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/22.jpeg'/>
    <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/21.jpeg"/>
    </AwesomeSlider>
    );
    return(
      <React.Fragment>
      {slider}     
    </React.Fragment>
    )};

export default WeddingDay;
