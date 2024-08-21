import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`dashboardsidebar  ${isOpen ? "show" : ""}`}>
      <div className="dashboardsidebar-header ">
        <h2 className="text-start">Dashboard</h2>
      </div>
      <nav className="dashboardsidebar-content ">
        <ul className="d-flex flex-column text-start ">
          <li>
            <Link to="/charts">Teachers</Link>
            
          </li>
          <li>
            <Link to="/seller">Students</Link>
          </li>
          <li>
            <Link to="/category">Attendence</Link>
          </li>
          <li>
            <Link to="/attributes">Fee & Payments</Link>
          </li>
          <li>
            <Link to="/order">Notics</Link>
          </li>
          <li>
            <Link to="/user">Transport</Link>
          </li>
        </ul>
      </nav>
     
    </div>
  );
}

export default Sidebar;
