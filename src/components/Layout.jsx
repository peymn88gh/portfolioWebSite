import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Layout({ children }) {
  const [menuStyles, setMenuStyles] = useState(window.location.pathname.includes('services') ? 'serviceSectionDefault':'default');
  const location = useLocation();
  const { t } = useTranslation('common')
  function handleChangeStyle(){
// console.log(location.pathname,'sgrkjs');
  // if(location.pathname.includes('services')){
  //   setMenuStyles('serviceSectionChange')
  // }
    setMenuStyles('change')
  }
  function handleReverseStyles(){
  if(location.pathname.includes('services')){
    setMenuStyles('serviceSectionDefault')
  }
  else setMenuStyles('default') 
}
  return (
      <>
        <div className="flex min-h-screen relative">
          <div className="flex flex-1 flex-col bg-secondary">
            <Header menuStyles={menuStyles} />
            <motion.div onViewportLeave={handleChangeStyle} whileInView={handleReverseStyles}></motion.div>
            <Outlet />
            <Footer t={t}></Footer>
          </div>
        </div>
      </>
  );
}

export default Layout;
