import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import day from "../../assets/day.png";
import blacklogo from "../../assets/logo-black.png";
import whitelogo from "../../assets/logo-white.png";
import night from "../../assets/night.png";
import search from "../../assets/search-b.png";
import searchW from '../../assets/search-w.png';

const NavBar = ({ theme, setTheme, toggleSidebar }) => {
  const navigate = useNavigate();

  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleIconClick = () => {
    navigate('/LoginForm'); 
  };

  return (
    <div className='navbar-container'>
      <div className='navbar1'>
        <Button
          aria-expanded=""
          aria-controls="offcanvas"
          variant="outline-light"
          className="sidebar-toggle-btn"
          onClick={toggleSidebar} 
        >
          <svg className='svgbtn mb-2' width="45" height="45" viewBox="0 0 20 20" role="presentation">
            <path fill="" fillRule="evenodd" d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01z"></path>
          </svg>
        </Button>

        <img src={theme === 'light' ? blacklogo : whitelogo} alt="logo" className='logo' />
        <ul className='nav-links'>
          <li>Home</li>
          <li>Admins</li>
          <li>Teachers</li>
          <li>Students</li>
        </ul>
        <div className='search-box'>
          <input type="text" placeholder='Search' />
          <img src={theme === 'light' ? searchW : search} className='imgs' alt='search-icon' />
        </div>
        <img onClick={toggle_mode} src={theme === 'light' ? night : day} alt="toggle-icon" className='toggle-icon' />
        <i className="fa-solid fa-user iconimage" onClick={handleIconClick}></i> 
      </div>
    </div>
  );
};

export default NavBar;
