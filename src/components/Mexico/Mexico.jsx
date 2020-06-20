import React, {useState, useEffect}from "react";
import {
  UncontrolledCarousel
} from 'reactstrap';
import './CssMexico.css';


const items = [
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_4362-scaled.jpeg',
    caption: 'Only picture because the others are still coming :) '  
  },
];


const Mexico = () => <UncontrolledCarousel items={items}  interval={false} />;

export default Mexico;
