import React, {useState, useEffect} from "react";
import {
  UncontrolledCarousel
} from 'reactstrap';
import './CssAruba.css';


const items = [

  // {
  //   src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_7484-scaled.jpeg'
  // }, 
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/BabyBeach.png', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_7994-scaled.jpeg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_7411-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_4248-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_7450-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
];


const Aruba = () => <UncontrolledCarousel items={items}  interval={false} />;


export default Aruba;
