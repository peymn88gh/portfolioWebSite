import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { motion } from "framer-motion";

function Layout({ children }) {
  const [menuStyles, setMenuStyles] = useState('default');
  function handleChangeStyle(){
    setMenuStyles('change')
    console.log('rgjne');
  }
  function handleReverseStyles(){
    setMenuStyles('default')
    console.log('rgjne');
  }
  return (
      <>
        <div className="flex min-h-screen relative">
          <div className="flex flex-1 flex-col bg-secondary">
            <Header menuStyles={menuStyles} />
            <motion.div onViewportLeave={handleChangeStyle} whileInView={handleReverseStyles}></motion.div>
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      </>
  );
}

export default Layout;
