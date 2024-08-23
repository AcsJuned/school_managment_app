import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import HeroSection from "./Components/HeroSection/HeroSection";
import FeatureSection from "./Components/FeatureSection/FeatureSection";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import Admin from "./Pages/Admin/Admin.jsx";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      {isLoggedIn ? (
        
        <>
          <Navbar theme={theme} setTheme={setTheme} toggleSidebar={toggleSidebar} />
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
          <Routes>
            <Route path="/Sidebar" element={<Sidebar isOpen={isSidebarOpen} />} />
            <Route path="/HeroSection" element={<HeroSection theme={theme} setTheme={setTheme} toggleSidebar={toggleSidebar} />} />
            <Route path="/FeatureSection" element={<FeatureSection />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/" element={<Navigate to="/FeatureSection" />} />
            <Route path="/Admin" element={<Admin/>}/>
            {/* You can add more routes specific to logged-in users here */}
          </Routes>
        </>
      ) : (
        // Render components for not logged-in users
        <>
          <Navbar theme={theme} setTheme={setTheme} toggleSidebar={toggleSidebar} />
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
          <Routes>
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/" element={
              <>
                <HeroSection theme={theme} setTheme={setTheme} toggleSidebar={toggleSidebar} />
                <FeatureSection />
                <Footer />
                <Admin/>
              </>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
