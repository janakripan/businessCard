import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/dashboardParts/Sidebar";


function DashboardLayout() {
 
  

  return (
   
    <div className="relative">
      <Header />

      <Sidebar/>

     

      <div id="DashboardDetail" >
        <Outlet />
      </div>

     
    </div>
 
  );
}

export default DashboardLayout;
