import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { motion, useCycle } from "framer-motion";
import { useTranslation } from "react-i18next";
import SideBar from "./Sidebar";
import { useInView } from 'react-intersection-observer';

function Layout({ children,selectedSection }) {
  // console.log(selectedSection,'selectedSection in Layout');
  const [open, cycleOpen] = useCycle(false, true);
  const isDesktop = () => document.body.clientWidth > 768;
  const [sidebarStatus, setSidebarStatus] = useState(isDesktop());
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({});
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSidebarStatus(isDesktop());
    });
    return () => window.removeEventListener("resize", isDesktop);
  }, []);

  return (
      <>
        <div className="flex relative">
          <div className="flex flex-col bg-bg1">
            
            <Header selectedSection={selectedSection} open={open} cycleOpen={cycleOpen} menuStyles={inView ? 'default' : 'change'} />
            {!sidebarStatus && <SideBar cycleOpen={cycleOpen}  selectedSection={selectedSection} open={open}/>}
            <motion.div ref={ref} className=" m-0" ></motion.div>
            <Outlet />
            <Footer t={t}></Footer>
          </div>
        </div>
      </>
  );
}

export default Layout;
