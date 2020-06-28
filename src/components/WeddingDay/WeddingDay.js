import React, {useState}from "react";
import {
  UncontrolledCarousel,
} from 'reactstrap';

import './CssWeddingDay.css';


const items = [
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/2-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  //{
    //src: 'https://alfredorafael.com/wp-content/uploads/2020/06/3-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  //},
   {
     src: 'https://alfredorafael.com/wp-content/uploads/2020/06/11-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    //  altText: 'Slide 4',
    //  caption: 'Slide 4'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/18-2-scaled.jpeg',
//    caption: 'Slide 5'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/19-2-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 6',
    // caption: 'Slide 6'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/16-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 7',
    // caption: 'Slide 7'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/3-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 8',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/10-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 9',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/9-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 10',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/6.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 11',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/21-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 12',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/22-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 13',
    // caption: 'Slide '
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/23-3-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 14',
    // caption: 'Slide 17'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/15-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 15',
    // caption: 'Slide 1'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/20-scaled-e1591227665526.jpeg', //'https://via.placeholder.com/1400x700.png',
    // altText: 'Slide 16',
    // caption: 'Last Picture ^_^'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/photo.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/Mac-Evelyn.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/mac_jose_suzy_amoni.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/Evelyn.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/photo-10.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/photo-6.jpg'
  },
 
];

const WeddingDay = () => <UncontrolledCarousel items={items}  interval={false}/>;


export default WeddingDay;
