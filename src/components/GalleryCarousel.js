import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
//styles
import "../assets/css/Carousel.css";

const items = [
  {
    src: require('../assets/img/gallery/image1.jpg'),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: require('../assets/img/gallery/image2.jpg'),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: require('../assets/img/gallery/image3.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image4.jpg'),
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: require('../assets/img/gallery/image5.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image6.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image7.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
  ,
  {
    src: require('../assets/img/gallery/image8.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image9.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image11.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image12.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image13.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image14.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image15.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image16.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image17.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image18.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image19.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image20.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image21.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image22.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image23.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image24.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image25.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image26.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image27.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image28.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/gallery/image29.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/shop/image1.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/shop/image2.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/shop/image3.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/shop/image4.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/shop/image5.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: require('../assets/img/shop/image6.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  } 
];

const GalleryCarousel = (props) => {
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
       
      >
      <div className="image-holder">
        <img src={item.src} alt={item.altText} className="image"/>
         
        
      </div> 
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default GalleryCarousel;