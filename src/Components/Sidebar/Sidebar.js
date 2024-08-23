import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaChalkboardTeacher,
  FaBusAlt,
  FaClipboardList,
} from "react-icons/fa";
import { PiStudentFill, PiBank } from "react-icons/pi";

import { FaChildren } from "react-icons/fa6";

function Sidebar({ isOpen }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className={`dashboardsidebar ${isOpen ? "show" : ""}`}>
      <div className="dashboardsidebar-header">
        <h2 className="text-start">SMS APP</h2>
      </div>
      <nav className="dashboardsidebar-content">
        <ul className="d-flex flex-column text-start">
          {[
            {
              name: "DashBoard",
              icon: <i className="fas fa-desktop icons fs-5"></i>,
              key: "dashboard",
              links: [
                { path: "/Admin", label: "Admin" },
                { path: "/seller", label: "Student" },
                { path: "/category", label: "Parents" },
              ],
            },
            {
              name: "Students",
              icon: <PiStudentFill className="icons fs-5" />,
              key: "students",
              links: [
                { path: "/all-students", label: "All Students" },
                { path: "/student-details", label: "Student Details" },
                { path: "/admit-form", label: "Admit Form" },
                { path: "/student-promotion", label: "Student Promotion" },
              ],
            },
            {
              name: "Teachers",
              icon: <FaChalkboardTeacher className="icons fs-5" />,
              key: "teachers",
              links: [
                { path: "/all-teachers", label: "All Teachers" },
                { path: "/teacher-details", label: "Teacher Details" },
                { path: "/add-teacher", label: "Add Teacher" },
              ],
            },
            {
              name: "Accountant",
              icon: <PiBank  className="icons fs-5"/>,
              key: "accountant",
              links: [
                { path: "/fee-collection", label: "Fee Collection" },
                { path: "/create-student-payment", label: "Create Student Payment" },
                { path: "/all-expenses", label: "All Expenses" },
                { path: "/add-expenses", label: "Add Expenses"},
              ],
            },
            {
              name: "Class",
              icon: <FaChildren  className=" icons fs-5"/>,
              key: "class",
              links: [
                { path: "/all-classes", label: "All Classes" },
                { path: "/add-new-class", label: "Add New Class" },
               
              ],
            },
            {
              name: "Attendance",
              icon: <i className="fas fa-th icons fs-5" ></i>,
              key: "attendence",
              links: [
                { path: "/all-students-attendance", label: "All Students Attendance" },
              ],
            },
            {
              name: "Transport",
              icon: <FaBusAlt  className="icons fs-5"/>,
              key: "transport",
              links: [
                { path: "/transport-lists", label: "Transport Lists" },
                { path: "/add-new-transport", label: "Add New Transport" },
                
              ],
            },
            {
              name: "Notice",
              icon: <FaClipboardList className="icons fs-5"/>,
              key: "notice",
              links: [
                { path: "/all-notices", label: "All Notices" },
                { path: "/add-new-notice", label: "Add New Notice" },
                
              ],
            },
            {
              name: "Account",
              icon: <i class="fas fa-cogs icons fs-5"></i>,
              key: "account",
              links: [
                { path: "/user-profile", label: "User Profile" },
                { path: "/account-settings", label: "Account Settings" },
                
              ],
            },
            
          ].map((menu, index) => (
            <li key={index} className="menu-item">
              <Link to="#" onClick={() => toggleMenu(menu.key)}>
                {menu.icon}
                {menu.name}
                {activeMenu === menu.key ? (
                  <FaChevronUp className="arrowicons" />
                ) : (
                  <FaChevronDown className="arrowicons" />
                )}
              </Link>
              {activeMenu === menu.key && (
                <ul className="submenu">
                  {menu.links.map((link, subIndex) => (
                    <li key={subIndex}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
