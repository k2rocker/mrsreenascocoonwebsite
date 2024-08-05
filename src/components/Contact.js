import React from 'react';
import './Contact.css';
import { Forms } from './Forms';
import { motion } from 'framer-motion';

const Contact = () => {

  return (
    <motion.div animate={{scale:1}} initial={{scale:0}}  className="contact">
      <div animate={{Y:1}} initial={{Y:-100}} className='centered-div'>
        <Forms/>
      </div>
    </motion.div>
  );
}

export default Contact;
