import React, {useState}from "react";
import {
  UncontrolledCarousel,
} from 'reactstrap';


const items = [
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/2-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/3-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/18-2-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/19-2-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/7-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/8-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 13',
    caption: 'Slide 13'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/3-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    altText: 'Slide 14',
    caption: 'Slide 14'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 16',
    caption: 'Slide 16'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/3-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    altText: 'Slide 17',
    caption: 'Slide 17'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
];

const WeddingDay = () => <UncontrolledCarousel items={items}  interval={false}/>;


export default WeddingDay;
