import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import HeroSection from "./Components/HeroSection/HeroSection";
import FeatureSection from "./Components/FeatureSection/FeatureSection";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
        <Routes>
          <Route path="/Sidebar" element={<Sidebar isOpen={isSidebarOpen} />} />
          <Route path="/HeroSection" element={<HeroSection theme={theme} setTheme={setTheme} toggleSidebar={toggleSidebar} />} />
          <Route path="/FeatureSection" element={<FeatureSection  />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeatureSection />
                {/* <LoginForm/> */}
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
