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
              {links.map(({ name, id }) => (
                <motion.p
                  key={id}
                  // href={to}
                  className={`${selectedSection===name ? 'text-secondary' : ' cursor-pointer'} `}
                  onClick={()=>handleScroll(name)}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.p>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      
  );
}
