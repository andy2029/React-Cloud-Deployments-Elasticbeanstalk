import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';

const SmallScaleFarming = () => {
  return (
    <div className="farming">
      {/* Display information about small-scale farming */}
      <Carousel fade>
        <Carousel.Item>
          <img className="garden-image" src="images/garden.jpg" alt="Vegetable garden"/> 
          <Carousel.Caption>
            <h3 style={{textShadow: '2px 3px 4px black'}}>Starting your own vegetable garden?</h3>
            <p style={{textShadow: '1px 2px 2px black'}}>Here are some useful tips</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="garden-image" src="images/sunny.jpg" alt="Sunny field"/> 
          <Carousel.Caption>
            <h3 style={{textShadow: '2px 3px 4px black'}}>Lots of sunlight</h3>
            <p style={{textShadow: '1px 2px 2px black'}}>Choose a location where your vegetables can get 6-8 hours of direct sunlight</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="garden-image" src="images/soil.jpg" alt="Bed of soil"/> 
          <Carousel.Caption>
            <h3 style={{textShadow: '2px 3px 4px black'}}>Nutrient-rich soil</h3>
            <p>Soil feeds your plants. Ensure you have healthy, nutrient--rich soil to help them grow</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="garden-image" src="images/garden.jpg" alt="Vegetable garden"/> 
          <Carousel.Caption>
            <h3 style={{textShadow: '2px 3px 4px black'}}>Start small</h3>
            <p style={{textShadow: '1px 2px 2px black'}}>Growing vegetables is not easy work. Start with a small plot and only grow what you know you'll need </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="garden-image" src="images/vegetables.jpg" alt="Basket of vegetables"/> 
          <Carousel.Caption>
            <h3 style={{textShadow: '2px 3px 4px black'}}>Choosing vegetables</h3>
            <p style={{textShadow: '1px 2px 2px black'}}>Start with 4-5 types of easy vegetables that are also productive</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
  );
}

export default SmallScaleFarming;
