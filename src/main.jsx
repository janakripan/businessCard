import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Routes/Home.jsx";
import Dashboard from "./Routes/Dashboard.jsx";
import { ApiProvider } from "./contexts/ApiContext.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import SingleData from "./components/dashboardParts/SingleData.jsx";
import DashboardHome from "./components/dashboardParts/DashboardHome.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import { SidebarProvider } from "./contexts/DashboardStyles.jsx";
import EditPage from "./components/dashboardParts/EditPage.jsx";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SidebarProvider>
      <ApiProvider>
        <StrictMode>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="alldata" element={<Dashboard />} />
              <Route path="singledata" element={<SingleData />} />
              <Route path="editdetails/:id" element={<EditPage/>} />
            </Route>
          </Routes>
        </StrictMode>
      </ApiProvider>
      </SidebarProvider> 
  </BrowserRouter>
);
