import react from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative">
      <Header />

      <div id="detail">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
