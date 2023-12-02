import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import SignupMemberView from "./components/signup/SignupMember.container";
import SignupAdminView from "./components/signup/SignupAdmin.container";
import Signin from "./components/signin/Signin.container";
import LandingView from "./components/landing/Landing.view";
import RegAs from "./components/regas/RegisterasPage.view";
import DashboardNew from "./dashboardTest/DashboardNew";

import DashboardLoader from "./components/clubdashboard/DashboardLoader";
import UserDashLoader from "./components/userdashboard/DashboardLoader";



function App()
{
  return (
  <div className="App">
    <BrowserRouter> 
      <Routes> 
         <Route path="/"  element={<LandingView/>}/>
        <Route path="/regas"  element={<RegAs/>}/> 
        <Route path="/signin"  element={<Signin/>}/>
        <Route path="/membersignup"  element={<SignupMemberView/>}/>
        <Route path="/adminsignup"  element={<SignupAdminView/>}/>
         <Route path="/users/dashboard"  element={<DashboardNew/>}/>
        <Route path="/dashboard/:component"  element={<DashboardNew/>}/>
        <Route path="/club/dashboard" element={<DashboardLoader/>}/>
        <Route path="/user/dashboard" element={<UserDashLoader/>}/>
      </Routes>
     </BrowserRouter>
    
    

  </div>
  )


}




export default App;
