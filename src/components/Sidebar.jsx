import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import LangBar from "./LangBar/LangBar";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

const links = [
  { name: "aboutme", id: 1 },
  { name: "services", id: 2 },
  { name: "testemonials", id: 3 },
  { name: "tools", id: 4 },
  { name: "demo", id: 5 }
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function SideBar({cycleOpen, selectedSection, open}) {
  const {t, i18n} = useTranslation('common')
  function handleScroll(name){
    scroller.scrollTo(name, {
      duration: 3000,
      delay: 0,
      smooth: 'easeInOutQuint',

      // ... other options
    });
    cycleOpen();
  }
  return (
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: '100%'
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
            className="fixed font-display font-extrabold text-white bg-accent z-40 h-full w-full"
          >
            <motion.div
              className=" mt-40 flex flex-col gap-10 mx-10 text-justify"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <LangBar mode={"mobile"} firstLang={i18n.language} />
                <motion.p
                  className={`${selectedSection==='aboutme' ? 'text-secondary' : ' cursor-pointer'} `}
                  onClick={()=>handleScroll('aboutme')}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {t('menu.aboutme')}
                </motion.p>
                <motion.p
                  className={`${selectedSection==='services' ? 'text-secondary' : ' cursor-pointer'} `}
                  onClick={()=>handleScroll('services')}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {t('menu.services')}
                </motion.p>
                <motion.p
                  className={`${selectedSection==='testemonials' ? 'text-secondary' : ' cursor-pointer'} `}
                  onClick={()=>handleScroll('testemonials')}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {t('menu.testemonials')}
                </motion.p>
                <motion.p
                  className={`${selectedSection==='tools' ? 'text-secondary' : ' cursor-pointer'} `}
                  onClick={()=>handleScroll('tools')}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {t('menu.tools')}
                </motion.p>
                <motion.p
                  className={`${selectedSection==='demo' ? 'text-secondary' : ' cursor-pointer'} `}
                  onClick={()=>handleScroll('demo')}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {t('menu.demo')}
                </motion.p>
                <motion.p
                  className={`${selectedSection==='contactme' ? 'text-secondary' : ' cursor-pointer'} `}
                  onClick={()=>handleScroll('contactme')}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {t('menu.contactme')}
                </motion.p>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      
  );
}
