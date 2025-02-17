import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Routes/Home.jsx";
import Dashboard from "./Routes/Dashboard.jsx";
import { ApiProvider } from "./contexts/ApiContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ApiProvider>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </StrictMode>
    </ApiProvider>
  </BrowserRouter>
);
