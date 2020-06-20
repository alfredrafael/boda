import React, { useState, useEffect } from 'react';
import './CssHeroSlider.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import ReactPlayer from 'react-player/lazy'


const items = [
  
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/20-scaled-e1591227665526.jpeg', //'https://via.placeholder.com/1400x700.png',
  },
  {
    video: 'https://alfredorafael.com/wp-content/uploads/2019/03/for-portfolio.mp4',
    src: '1',
  },
];

const Hero = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        video={item.video}
      >


      {
        item.video ?
        <div style={{backgroundColor: 'black'}}>
          <div style={{opacity: '.7'}}>
            <ReactPlayer loop='true' width='100vw' height='100vh'  url="https://www.youtube.com/embed/OVVIzA44iTY" playing={true} allowfullscreen />
          </div>
        </div>

      :<div style={{backgroundColor: 'black'}}>
       <div style={{opacity: '.7'}}>
          <img src={item.src} alt={item.altText} style={{width: '100%'}}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </div>
      </div>
      }
      </CarouselItem>
        
    );
  });

  return (

    
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel-fade"
      interval={false}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Hero;


{/* <div>
        <iframe style={{minWidth: '100%'}} className="video-container video-container-overlay" autoPlay={true} loop
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
        </iframe>
      
      */}