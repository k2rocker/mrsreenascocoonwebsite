import React from 'react';
import './Branches.css';
import schoolmouli from '../assets/schoolmouli.jpg'
import schoolrama from '../assets/schoolrama.jpeg'
import { motion } from 'framer-motion';

const Branches = () => {

  return (
    <motion.div animate={{scale:1}} initial={{scale:0}} className='branches' >
          
              <motion.div initial={{X:-100}} className='img-placeholder' >
                <a href="https://www.google.com/maps/dir/13.0435441,80.1540238/reenas+cocoon+moulivakkam/@13.0321985,80.1393127,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a52610045111b91:0x7de7555a3bb90751!2m2!1d80.1410048!2d13.0224755?entry=ttu">
                  <img src={schoolmouli} alt='moulivakkam school' className='schoolimage'/>
                  <h1>MOULIVAKKAM</h1>
                </a>
              </motion.div>
          
          
              <motion.div initial={{X:100}}  className='img-placeholder'>
                <a href="https://www.google.com/maps/dir/13.0435441,80.1540238/reena's+cocoon/@13.0361193,80.1451666,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a5260d65984bc61:0x47e59584096ba7bb!2m2!1d80.1799668!2d13.0306693?entry=ttu">
                  <img src={schoolmouli} alt='ramapuram school' className='schoolimage'/>
                  <h1>RAMAPURAM</h1>
                </a>
              </motion.div>
    </motion.div>
  );
}

export default Branches;
