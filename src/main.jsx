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
import AuthLayout from "./Routes/AuthLayout.jsx";
import AuthHome from "./components/AuthParts/AuthHome.jsx";
import Login from "./components/AuthParts/Login.jsx";
import SignUp from "./components/AuthParts/SignUp.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./shared/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SidebarProvider>
      <ApiProvider>
        <AuthProvider>
          <StrictMode>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
              </Route>
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardHome />} />
                <Route path="alldata" element={<Dashboard />} />
                <Route path="singledata" element={<SingleData />} />
                <Route path="editdetails/:id" element={<EditPage />} />
              </Route>
              <Route path="authentication" element={<AuthLayout />}>
                <Route path="authome" element={<AuthHome />}>
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
                </Route>
              </Route>
            </Routes>
          </StrictMode>
        </AuthProvider>
      </ApiProvider>
    </SidebarProvider>
  </BrowserRouter>
);
