import React, {useState}from "react";
import {
  UncontrolledCarousel
} from 'reactstrap';

import './CssIndia.css';


const items = [
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/india_truck-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/India_full_fam-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 2',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/India_boat-1-scaled.jpg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 3',
    // caption: 'Slide 2'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1050602-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 4',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1060618-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 5',
    // caption: 'Slide 4'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1060611-scaled.jpg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 6',
    // caption: 'Slide 5'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/India_James-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 7',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1010440-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 8',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1060615-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 9',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/india_jv1-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 10',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/india_3-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 11',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1050553-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 12',
    // caption: 'Slide 1'
  },
   {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/PC260077-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 11',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1050575-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 12',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/P1050565-scaled.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/India_taj2-scaled-e1592117043198.jpg',
    caption: 'Last Picture ^_^'
  }
];

const India = () => <UncontrolledCarousel items={items}  interval={false} />;


export default India;
