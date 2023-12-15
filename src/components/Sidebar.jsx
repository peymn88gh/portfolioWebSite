import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 }
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

export default function SideBar({open}) {


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
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      
  );
}
