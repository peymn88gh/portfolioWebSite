import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const AnimatedComponent = ({ children, setSelectedSection, sectionName }) => {
  // console.log(sectionName, setSelectedSection,'animatedcomp');
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Adjust as needed
  });
// console.log(inView,sectionName,'invie in sections');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedSection(sectionName);
          }
        });
      },
      { threshold: 0.5 } // You can adjust the threshold as needed
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName, setSelectedSection]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      <div ref={sectionRef}></div>
      {children}
    </motion.div>
  );
}

export default AnimatedComponent;