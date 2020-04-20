import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';
import { Link } from "react-scroll"
//styles
import "../assets/css/Carousel.css";

const items = [
  {
    src: require('../assets/img/image24.jpg'),
     
  },
  {
    src: require('../assets/img/image10.jpg'),
     
  },
  {
    src: require('../assets/img/image14.jpg'),
     
  },
  {
    src: require('../assets/img/image15.jpg'),
    
  },
  {
    src: require('../assets/img/image16.jpg'),
     
  },
  {
    src: require('../assets/img/image7.jpg'),
    
  },
  {
    src: require('../assets/img/image21.jpg'),
     
  }
];

const Slide = (props) => {
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
        <h1
        style={{
            position:"absolute",
            color:"white",
            textAlign:"center",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            fontWeight:"600",
            fontFamily: "Helvetica"

        }}
        >WE OFFER A LOT OF SERVICES</h1>
        <div style={{
            position:"absolute",
            color:"white",
            textAlign:"center",
            top:"80%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            fontWeight:"600",
        }}>
        <Link
        activeClass="active"
                to="ourservices"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
        >
            <Button className="btn-round" color="neutral" type="button" outline>
              More
            </Button>
            </Link>
            </div>

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

export default Slide;