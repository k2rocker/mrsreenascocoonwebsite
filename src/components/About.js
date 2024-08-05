import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import cutekid from '../assets/cutekidbg.png';
import cutekid2 from '../assets/cutekidbg2.png';
import Whybg from '../assets/whyBg.png';
import { motion } from 'framer-motion';
import './About.css';

// Global styles with CSS variables
const GlobalStyle = createGlobalStyle`
  :root {
    --item1-transform: translateX(-100%) translateY(-5%) scale(1.5);
    --item1-filter: blur(30px);
    --item1-zIndex: 11;
    --item1-opacity: 0;

    --item2-transform: translateX(0);
    --item2-filter: blur(0px);
    --item2-zIndex: 10;
    --item2-opacity: 1;

    --item3-transform: translate(50%,10%) scale(0.8);
    --item3-filter: blur(10px);
    --item3-zIndex: 9;
    --item3-opacity: 1;

    --item4-transform: translate(90%,20%) scale(0.5);
    --item4-filter: blur(30px);
    --item4-zIndex: 8;
    --item4-opacity: 1;

    --item5-transform: translate(120%,30%) scale(0.3);
    --item5-filter: blur(40px);
    --item5-zIndex: 7;
    --item5-opacity: 0;
  }
`;

const Carousel = styled.div`
  position: relative;
  height: 800px;
  overflow: hidden;
  margin-top: -50px;
  background-image: url(${Whybg});
  background-size: cover;
  background-position: center;
`;

const List = styled.div`
  position: absolute;
  width: 1140px;
  max-width: 90%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
`;

const Item = styled.div`
  position: absolute;
  left: 0%;
  width: 70%;
  height: 100%;
  font-size: 15px;
  transition: left 0.5s, opacity 0.5s, width 0.5s;

  &:nth-child(n + 6) {
    opacity: 0;
  }

  &:nth-child(1) {
    transform: var(--item1-transform);
    filter: var(--item1-filter);
    z-index: var(--item1-zIndex);
    opacity: var(--item1-opacity);
  }

  &:nth-child(2) {
    transform: var(--item2-transform);
    filter: var(--item2-filter);
    z-index: var(--item2-zIndex);
    opacity: var(--item2-opacity);
  }

  &:nth-child(3) {
    transform: var(--item3-transform);
    filter: var(--item3-filter);
    z-index: var(--item3-zIndex);
    opacity: var(--item3-opacity);
  }

  &:nth-child(4) {
    transform: var(--item4-transform);
    filter: var(--item4-filter);
    z-index: var(--item4-zIndex);
    opacity: var(--item4-opacity);
  }

  &:nth-child(5) {
    transform: var(--item5-transform);
    filter: var(--item5-filter);
    z-index: var(--item5-zIndex);
    opacity: var(--item5-opacity);
  }
`;

const ItemImage = styled.img`
  width: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: right 1.5s;
`;

const Introduce = styled.div`
  opacity: 0;
  pointer-events: none;

  ${Item}:nth-child(2) & {
    opacity: 1;
    pointer-events: auto;
    width: 400px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.5s;
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 500;
  line-height: 1em;
`;

const Topic = styled.div`
  font-size: 4em;
  font-weight: 500;
`;

const Description = styled.div`
  font-size: small;
  color: #5559;
`;

const SeeMoreButton = styled.button`
  font-family: Poppins;
  margin-top: 1.2em;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #555;
  background-color: transparent;
  font-weight: bold;
  letter-spacing: 3px;
  transition: background 0.5s;

  &:hover {
    background: #eee;
  }
`;

const Detail = styled.div`
  opacity: 0;
  pointer-events: none;

  ${Carousel}.showDetail & {
    ${Item}:nth-child(2) & {
      opacity: 1;
      pointer-events: auto;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }

    ${Item}:nth-child(2) ${ItemImage} {
      right: -100%;
    }

    ${Item}:nth-child(2) ${Introduce} {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

const DetailTitle = styled.div`
  font-size: 3em;
  font-weight: 500;
  line-height: 1em;
`;

const DetailDescription = styled.div`
  font-size: medium;
  margin: 2em 0;
`;

const Specifications = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Specification = styled.div`
  background-color: #5551;
  padding: 0.5em;
  border-radius: 10px;
`;

const SpecificationName = styled.p`
  color: #5557;
`;

const CheckoutButton = styled.button`
  border: none;
  padding: 0.5em;
  border-radius: 10px;
  background: black;
  color: white;
  margin-right: 15px;
  font-family: Poppins;
  cursor: pointer;

  &:nth-child(2) {
    background-color: white;
    color: black;
  }
`;

const Arrows = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;
`;

const ArrowButton = styled.button`
  border: none;
  padding: 5px 20px;
  font-family: Poppins;
  font-size: medium;
  cursor: pointer;
  margin:5px;
  color: #ff5757;
  background-color: #FFA500;
  transition: all 0.5s;
  border-radius:40%;

  &:nth-child(3) {
    padding: 0 40px;
  }

  &:hover {
    color: #555;
  }
`;

const About = () => {
  useEffect(() => {
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');
    let itemIndex = 1;

    const showNextItem = () => {
      itemIndex = (itemIndex % 6) + 1;
      carousel.classList.remove('prev', 'showDetail');
      carousel.classList.add('next');
      setTimeout(() => {
        carousel.classList.remove('next');
        carousel.querySelector('.list').append(carousel.querySelector('.list .item'));
      }, 500);
    };

    const showPrevItem = () => {
      itemIndex = (itemIndex === 1) ? 6 : itemIndex - 1;
      carousel.classList.remove('next', 'showDetail');
      carousel.classList.add('prev');
      setTimeout(() => {
        carousel.classList.remove('prev');
        carousel.querySelector('.list').prepend(carousel.querySelector('.list .item:last-child'));
      }, 500);
    };

    nextBtn.addEventListener('click', showNextItem);
    prevBtn.addEventListener('click', showPrevItem);

    return () => {
      nextBtn.removeEventListener('click', showNextItem);
      prevBtn.removeEventListener('click', showPrevItem);
    };
  }, []);

  const imageList = [[cutekid,"topic1","this is the first one"], [cutekid2,"topic2","this is the 2 one"], [cutekid,"topic3","this is the 3 one"], [cutekid2,"topic4","this is the 4 one"],[cutekid,"topic5","this is the first one"],[cutekid2,"topic6","this is the first one"]];

  return (
    <motion.div animate={{scale:1}} initial={{scale:0}} >
      <GlobalStyle />
      <Carousel className="carousel">
        <List className="list">
          {imageList.map((src, index) => (
            <Item className="item" key={index}>
              <ItemImage src={src[0]} alt={`img${index + 1}`} className='imagesection'/>
              <Introduce className="introduce">
                <Topic className="topic">{src[1]}</Topic>
                <p className='description'>
                  {src[2]}
                </p>
              </Introduce>
            </Item>
          ))}
        </List>
        <Arrows className="arrows">
          <ArrowButton id="prev">&lt;</ArrowButton>
          <ArrowButton id="next">&gt;</ArrowButton>
        </Arrows>
      </Carousel>
    </motion.div>
  );
};

export default About;
