import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { motion, useCycle } from "framer-motion";
import { useTranslation } from "react-i18next";
import SideBar from "./Sidebar";
import { useInView } from 'react-intersection-observer';

function Layout({ children }) {
  const [open, cycleOpen] = useCycle(false, true);
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({});
  return (
      <>
        <div className="flex min-h-screen relative">
          <div className="flex flex-1 flex-col bg-bg1">
            
            <Header open={open} cycleOpen={cycleOpen} menuStyles={inView ? 'default' : 'change'} />
            <SideBar open={open}/>
            <motion.div ref={ref} ></motion.div>
            <Outlet />
            <Footer t={t}></Footer>
          </div>
        </div>
      </>
  );
}

export default Layout;
