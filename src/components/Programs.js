import React from 'react';
import './Programs.css';
import butterfly from '../assets/butterfly.png';
import { motion } from 'framer-motion';
import playgroupcard from '../assets/playgroupagecard.png';
import prekgcard from '../assets/prekgagecard.png';
import lkgcard from '../assets/lkgagecard.png';
import ukgcard from '../assets/ukgagecard.png';

const Programs = () => {
  return (
    <motion.div animate={{scale:1}} initial={{scale:0}} className="banner">
    <div className="slider" style={{ "--quantity": 4 }}>
      <div className="item" style={{ "--position": 1 }}>
        <img src={playgroupcard} alt="" />
      </div>
      <div className="item" style={{ "--position": 2 }}>
        <img src={prekgcard} alt="" />
      </div>
      <div className="item" style={{ "--position": 3 }}>
        <img src={lkgcard} alt="" />
      </div>
      <div className="item" style={{ "--position": 4 }}>
        <img src={ukgcard} alt="" />
      </div>
    </div>
  </motion.div>
  );
}

export default Programs;
