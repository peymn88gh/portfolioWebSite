import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function Layout({ children }) {
  return (
      <>
        <div className="flex min-h-screen font-Poppins">
          <div className="flex flex-1 flex-col bg-slate-100">
            <Header />
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      </>
  );
}

export default Layout;
