import React, {useState, useEffect}from "react";
import {
  UncontrolledCarousel
} from 'reactstrap';
import './CssChile.css';


const items = [
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_3153-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1769-scaled.jpg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1877-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1863-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1508.jpg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 5',
    // caption: 'Slide 5'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_3189-scaled.jpg',
    // altText: 'Slide 6',
    // caption: 'Slide 6'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_3154-scaled.jpg', //'https://via.placeholder.com/1400x700.png',, //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 7',
    // caption: 'Slide 7'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/2017-02-11-12.22.06-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 8',
    // caption: 'Slide 8'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1936-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 9',
    // caption: 'Slide 9'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1968-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 10',
    // caption: 'Slide 10'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_2016-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 11',
    // caption: 'Slide 11'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1558-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 15',
    // caption: 'Slide 15'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_1611-copy.png', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 12',
    // caption: 'Slide 12'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_2009-scaled.jpg',
    // caption: 'x'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_0795-scaled.jpg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 17',
    // caption: 'Slide 17'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_0805-scaled.jpg',
    // caption: 'w'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_3093-scaled.jpg',
    // caption: 'y'
  },
];


const Chile = () => <UncontrolledCarousel items={items}  interval={false} />;


export default Chile;
