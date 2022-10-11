import React from "react";
import { useGlobalContext } from "./Context";
import logo from "../images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import profileImage from "../images/profile-image.png";
import { Link } from "react-router-dom";
import AdminOption from "./AdminOption";

const Navbar = () => {
  const { showNavbar, setShowNavbar, setShowDash, showDash } =
    useGlobalContext();

  return window.innerWidth > 1100 ? (
    <nav>
      <Link to='/dashboard'>
        <div className='logo'>
          <img src={logo} alt='lendsqr logo' />
        </div>
      </Link>
      <div className='search'>
        <div className='search-container'>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search for anything'
          />
          <div className='search-icon'>
            <FaSearch className='icon' />
          </div>
        </div>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Docs</li>
          <li>
            <BsBell className='bell' />
          </li>
          <li className='profile'>
            <img src={profileImage} alt='profile ' />
          </li>
          <li>
            Adedeji
            <span>
              <IoMdArrowDropdown />
            </span>
            <AdminOption />
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <>
      <nav>
        <Link to='/dashboard'>
          <div className='logo'>
            <img src={logo} alt='lendsqr logo' />
          </div>
        </Link>
        <div
          className='hambugger-menu'
          onClick={() => {
            setShowNavbar(!showNavbar);
            setShowDash(false);
          }}
        >
          {showNavbar || showDash ? (
            <FaTimes className='icon' />
          ) : (
            <FaBars className='icon' />
          )}
        </div>
      </nav>
      <div className={`mob-nav-items ${showNavbar && `show`}`}>
        <div className='search'>
          <div className='search-container'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search for anything'
            />
            <div className='search-icon'>
              <FaSearch className='icon' />
            </div>
          </div>
        </div>
        <div className='nav-items'>
          <ul>
            <li
              onClick={() => {
                setShowNavbar(false);
                setShowDash(true);
              }}
            >
              Dashboard
            </li>
            <li>Documentations</li>
            <li>
              Notifications
              <span>
                <BsBell className='bell' />
              </span>
            </li>
            <li className='profile'>
              <img src={profileImage} alt='profile ' />
            </li>
            <li>
              Adedeji
              <span>
                <IoMdArrowDropdown />
              </span>
              <AdminOption />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
