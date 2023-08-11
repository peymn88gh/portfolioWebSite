import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import { sidebarToggle } from "utils/toggler.js";
import BottomNavbar from "components/BottomNavbar/Index";
import { useAuth } from "context/AuthContext";

function AuthLayout({ ...props }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
  if(!user && !loading) navigate('/auth/login',{replace:true});
  },[user, loading]);

 
  const isDesktop = () => document.body.clientWidth > 768;
  const [sidebarStatus, setSidebarStatus] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSidebarStatus(isDesktop());
    });
    return () => window.removeEventListener("resize", isDesktop);
  }, []);

  return (
    <div className="adminLayout">
      {/* Sidebar */}
      <Sidebar
        toggle={sidebarToggle}
        className={sidebarStatus ? "" : "mobile"}
      />

      {/* Main Wrapper */}
      <div className="mainWrapper">
        <Outlet context={[sidebarToggle]} />
      </div>

      {/* Bottom Navigation */}
      <BottomNavbar />  
    </div>
  );
}

export default AuthLayout;
