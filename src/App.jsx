import React , { useEffect }from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Dashboard from "pages/Dashboard";
import Table from "pages/Table";
import AuthLayout from "components/Layout/AuthLayout";
import GuestLayout from "components/Layout/GuestLayout";
import Login from "pages/auth/Login";
import Blank from "pages/Blank";
import NotFound from "pages/NotFound";
import Form from "pages/Form";
import RegisterIndex from "pages/auth/Register";
import ResetPasswordIndex from "pages/auth/ResetPassword";
import Index from "pages/index";
import Contact from "pages/Contact";
import UserProfile from "pages/Profile/Index";

import "flag-icons/css/flag-icons.min.css";
function App() {
  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     let tokenForUesr = process.env.REACT_APP_ADMIN_USERNAME;
  //     let userPassword = process.env.REACT_APP_ADMIN_PASSWORD;
  //     let endpointForToken = process.env.REACT_APP_TOKEN_ENDPOINT;
  //     if(tokenForUesr && userPassword && endpointForToken)
  //       axios.post(`${endpointForToken}`, {"username" : tokenForUesr , "password" : userPassword})
  //       .then(response => {
  //           const { token } = response.data;
  //           localStorage.setItem('token', token);
  //       })
  //       .catch(err => {
  //           if(err) { console.log(err) }
  //       })
  //   }
  // },[])
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Index />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/table" element={<Table />}></Route>
            <Route path="/blank" element={<Blank />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
          <Route path="/auth" element={<GuestLayout />}>
            <Route path="/auth/index" element={<Index />}></Route>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/reset-password" element={<ResetPasswordIndex />}></Route>
            <Route path="/auth/register" element={<RegisterIndex />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
  );
}

export default App;
