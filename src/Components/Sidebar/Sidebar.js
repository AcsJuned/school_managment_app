import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaChevronUp,FaChalkboardTeacher,FaBusAlt,FaClipboardList   } from "react-icons/fa"; 
import { PiStudentFill,PiBank } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
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
          <li className="menu-item">
          <i class="fas fa-desktop icons fs-5"></i>
            <Link to="#" onClick={() => toggleMenu("dashboard")} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            
              DashBoard
              {activeMenu === "dashboard" ? <FaChevronUp  className="arrowicons"/> : <FaChevronDown className="arrowicons" />}
            </Link>
            {activeMenu === "dashboard" && (
              <ul className="submenu">
                <li>
                  <Link to="/charts">Admin</Link>
                </li>
                <li>
                  <Link to="/seller">Student</Link>
                </li>
                <li>
                  <Link to="/category">Parents</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <PiStudentFill className="icons fs-5" />
            <Link to="#" onClick={() => toggleMenu("students")}>
              Students
              {activeMenu === "students" ? <FaChevronUp className="arrowicons"/> : <FaChevronDown className="arrowicons"/>}
            </Link>
            {activeMenu === "students" && (
              <ul className="submenu">
                <li>
                  <Link to="/all-students">All Students</Link>
                </li>
                <li>
                  <Link to="/student-details">Student Details</Link>
                </li>
                <li>
                  <Link to="/admit-form">Admit Form</Link>
                </li>
                <li>
                  <Link to="/student-promotion">Student Promotion</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <FaChalkboardTeacher className="icons fs-5" />
            <Link to="#" onClick={() => toggleMenu("teachers")}>
              Teachers
              {activeMenu === "teachers" ? <FaChevronUp className="arrowicons" /> : <FaChevronDown className="arrowicons"/>}
            </Link>
            {activeMenu === "teachers" && (
              <ul className="submenu">
                <li>
                  <Link to="/all-teachers">All Teachers</Link>
                </li>
                <li>
                  <Link to="/teacher-details">Teacher Details</Link>
                </li>
                <li>
                  <Link to="/add-teacher">Add Teacher</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <RiParentLine  className="icons fs-5"/>
            <Link to="#" onClick={() => toggleMenu("parents")}>
              Parents
              {activeMenu === "parents" ? <FaChevronUp className="arrowicons"/> : <FaChevronDown className="arrowicons"/>}
            </Link>
            {activeMenu === "parents" && (
              <ul className="submenu">
                <li>
                  <Link to="/your-child">Your Child</Link>
                </li>
                <li>
                  <Link to="/child-report">Child Report</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <BiLibrary  className="icons fs-5"/>
            <Link to="#" onClick={() => toggleMenu("library")}>
              Library
              {activeMenu === "library" ? <FaChevronUp className="arrowicons"/> : <FaChevronDown className="arrowicons"/>}
            </Link>
            {activeMenu === "library" && (
              <ul className="submenu">
                <li>
                  <Link to="/all-books">All Books</Link>
                </li>
                <li>
                  <Link to="/add-books">Add Books</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <PiBank  className="icons fs-5"/>
            <Link to="#" onClick={() => toggleMenu("account")}>
              Accountant
              {activeMenu === "account" ? <FaChevronUp className="arrowicons" /> : <FaChevronDown className="arrowicons"/>}
            </Link>
            {activeMenu === "account" && (
              <ul className="submenu">
                <li>
                  <Link to="/fee-collection">Fee Collection</Link>
                </li>
                <li>
                  <Link to="/create-student-payment">Create Student Payment</Link>
                </li>
                <li>
                  <Link to="/all-expenses">All Expenses</Link>
                </li>
                <li>
                  <Link to="/add-expenses">Add Expenses</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <FaChildren  className=" icons fs-5"/>
            <Link to="#" onClick={() => toggleMenu("classes")}>
              Class
              {activeMenu === "classes" ? <FaChevronUp className="arrowicons" /> : <FaChevronDown  className="arrowicons"/>}
            </Link>
            {activeMenu === "classes" && (
              <ul className="submenu">
                <li>
                  <Link to="/all-classes">All Classes</Link>
                </li>
                <li>
                  <Link to="/add-new-class">Add New Class</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <i className="fas fa-th icons fs-5" ></i>
            <Link to="#" onClick={() => toggleMenu("attendance")}>
              Attendance
              {activeMenu === "attendance" ? <FaChevronUp className="arrowicons"/> : <FaChevronDown className="arrowicons"/>}
            </Link>
            {activeMenu === "attendance" && (
              <ul className="submenu">
                <li>
                  <Link to="/all-students-attendance">All Students Attendance</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <FaBusAlt  className="icons fs-5"/>
            <Link to="#" onClick={() => toggleMenu("transport")}>
              Transport
              {activeMenu === "transport" ? <FaChevronUp className="arrowicons" /> : <FaChevronDown className="arrowicons"/>}
            </Link>
            {activeMenu === "transport" && (
              <ul className="submenu">
                <li>
                  <Link to="/transport-lists">Transport Lists</Link>
                </li>
                <li>
                  <Link to="/add-new-transport">Add New Transport</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <FaClipboardList className="icons fs-5"/>
            <Link to="#" onClick={() => toggleMenu("notice")}>
              Notice
              {activeMenu === "notice" ? <FaChevronUp className="arrowicons"/> : <FaChevronDown className="arrowicons" />}
            </Link>
            {activeMenu === "notice" && (
              <ul className="submenu">
                <li>
                  <Link to="/all-notices">All Notices</Link>
                </li>
                <li>
                  <Link to="/add-new-notice">Add New Notice</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
          <i class="fas fa-cogs icons fs-5"></i>
            <Link to="#" onClick={() => toggleMenu("account-settings")}>
              Account 
              {activeMenu === "account-settings" ? <FaChevronUp  className="arrowicons"/> : <FaChevronDown className="arrowicons" />}
            </Link>
            {activeMenu === "account-settings" && (
              <ul className="submenu">
                <li>
                  <Link to="/user-profile">User Profile</Link>
                </li>
                <li>
                  <Link to="/account-settings">Account Settings</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
