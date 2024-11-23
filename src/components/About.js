import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import cutekid4 from '../assets/cutekidbg.png';
import cutekid from '../assets/academicexcellence.png'
//import cutekid2 from '../assets/cutekidbg2.png';
import cutekid2 from '../assets/attention to each student.png'
import cutekid3 from '../assets/tailormadelearning.png'
//import cutekid4 from '../assets/extracurriculars.png'
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


const Topic = styled.div`
  font-size: 4em;
  font-weight: 500;
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

  const imageList = [[cutekid,"Academic Excellence","At Reena’s Cocoon, we strive for academic excellence among our young learners. Through our unique teaching methods and attention to detail, each student flourishes to their full potential, exhibiting thorough reading, writing and speaking skills."],
   [cutekid2,"Individual Attention","In order to improve the learning experience for each student, we ensure that one on one attention is provided.This enables us to ascertain the strengths, weaknesses and personal interests of the children in order to build up targeted areas. It also allows each child to discover their hobbies and their talents. "],
   [cutekid3,"Tailor Made teaching","By giving each child focused attention, our qualified teachers and staff can figure out how they learn best. Whether it's through listening (songs, music, talking), seeing (images, graphs, videos), reading/writing (books, articles), or kinaesthetic (sports, games, activities), we make sure to adapt our teaching styles to fit each student."],
   [cutekid4,"Extra Curriculars","At Reena’s Cocoon we not only rely on our academics to build our budding learners, but we also highly encourage extracurriculars. We allow each child to discover their hobbies and push them to pursue their interests through competitions and activities."]];

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
