import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const WeddingDay = () => {

  
  const slider = (
    <AwesomeSlider bullets={false}>
    <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/21.jpeg" style={{height: '170%', width: '100%'}} />
    <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/22.jpeg' style={{height: '170%', width: '100%'}}  />
    <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/20.jpeg" />
    <div data-src="https://alfredorafael.com/wp-content/uploads/2020/06/3.jpeg" style={{height: '160%'}} />
    <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/23-3.jpeg' style={{height: '160%'}} />
    <div data-src='https://alfredorafael.com/wp-content/uploads/2020/06/23-3.jpeg' style={{height: '160%'}} />
    </AwesomeSlider>
    );
    return(
      <React.Fragment>
      <div style={{width: '100%'}}>
      {slider}     
      </div>
    </React.Fragment>
    )};

export default WeddingDay;
