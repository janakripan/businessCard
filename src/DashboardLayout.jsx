import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/dashboardParts/Sidebar";

import { useState } from "react";

function DashboardLayout() {
 
  

  return (
   
    <div className="relative">
      <Header />

      <Sidebar/>

     

      <div id="DashboardDetail" >
        <Outlet />
      </div>

      <Footer />
    </div>
 
  );
}

export default DashboardLayout;
