import React, {useState}from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
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
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/4-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/5-scaled.jpeg', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'https://alfredorafael.com/wp-content/uploads/2020/06/6-2-scaled.jpeg', //'https://via.placeholder.com/1400x700.png',
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

const WeddingDay = () => {

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
        item.video 
         
        
        ?<div> 
            <video style={{maxWidth: '100%'}} className="video-container video-container-overlay" autoPlay={true} loop>   
              <source src="https://alfredorafael.com/wp-content/uploads/2019/03/for-portfolio.mp4" type="video/mp4"/>
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </video>
         </div>

        : <div>
            <img src={item.src} alt={item.altText} style={{width: '100%'}}/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </div>
      
    }

      </CarouselItem>

      );
    });

  
    return(
      <React.Fragment>

      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel-slide"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
      
    </React.Fragment>
    )};

export default WeddingDay;
