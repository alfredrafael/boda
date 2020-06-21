import React, {useState, useEffect}from "react";
import {
  UncontrolledCarousel
} from 'reactstrap';
import './CssMexico.css';


const items = [
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_4362-scaled.jpeg',
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_3915-scaled.jpeg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/SN11_110419-163420-scaled.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/SN11_110419-163415-scaled.jpg',
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/ST21_110419-145759-scaled.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/ST21_110419-145750-scaled.jpg'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/img-201904101235555cae3a92d507b-scaled.jpg'
  },
  
];


const Mexico = () => <UncontrolledCarousel items={items}  interval={false} />;

export default Mexico;
