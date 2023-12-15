import React from 'react';
import { motion } from 'framer-motion';
const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1, transition: { duration:2 }},
  };
  
const AnimatedSVG = () => {
  

  return (
    <div>
      <motion.svg
        id="White"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 474.3 622.88"
        className={' h-60 mb-10'}
        initial="hidden"
        animate="visible"
      >
        <defs>
          <style>
            {`.cls-1 {
              fill: #fff;
              stroke: #0b36a8;  
             
              stroke-width: 7px;
            }`}
          </style>
        </defs>
        <motion.polygon
          className="cls-1"
          points="451.16 525.48 21.48 525.48 236.32 100.45 406.09 436.32 165.64 436.32 235.07 298.98 279.64 387.16 322.29 387.16 256.39 256.79 235.23 214.92 234.91 214.92 213.74 256.79 118.62 444.98 103.54 474.38 425.33 474.38 451.16 525.48"
          variants={pathVariants}
        />
      </motion.svg>
      <p  className=' text-bg1 text-2xl text-center'>Welcome</p>
    </div>
  );
};

export default AnimatedSVG;
