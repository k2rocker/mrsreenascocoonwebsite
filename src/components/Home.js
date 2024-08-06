import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import curiosityimg from '../assets/curiosityimg.png';
import Testimonials from './Testimonials';
import whyholder from '../assets/whyholder.png';
import whatholder from '../assets/whatholder.png';
import whereholder from '../assets/whereholder.png';

const Home = () => {
  return (
    <div className="home">
      
      <Carousel className='carousel'>
        <Carousel.Item>
          <video className="d-block w-100" autoPlay  muted>
            <source src={require('../assets/video.mp4')} type="video/mp4" />
          </video>
        </Carousel.Item>
      {/*  <Carousel.Item>
          <img className="d-block w-100 " src={require('../assets/image5.png')} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require('../assets/image5.png')} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>*/}
      </Carousel>
      <div className='quickhome'>
        <div className='quickintro'>
          <div className='content'>
            <div className='contentvalue'>
              <Carousel fade>
                <Carousel.Item>
                  <div className='insidecarousel'>
                    <h3>OUR MISSION</h3>
                    <p>Hello all this is one of our mission</p>
                    <p>_____________</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='insidecarousel'>
                    <h3>OUR VISSION</h3>
                    <p>Hello all this is one of our mission</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className='circleimg'>
             
              <img src={curiosityimg} alt='Curiosity is the key' className='jumping-image-2'/>
          </div>
        </div>
        <div className='questions'>
          <Link to='/about'>
            <img src={whyholder} alt='WHY CHOOSE US?' className='jumping-image-q'/>
          </Link>
          <Link to='/programs'>
            <img src={whatholder} alt='WHAT DO WE OFFER?' className='jumping-image-q'/>
          </Link>
          <Link to='/branches'>
          <img src={whereholder} alt='WHERE ARE WE?' className='jumping-image-q'/>
          </Link>   
        </div>
      </div>
      <Testimonials/>
    </div>
  );
}

export default Home;
