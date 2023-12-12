import React, { useState, useEffect } from "react";
import "./Navbar.css";
import CodingXLogo from "../Assets/coding-x-logo.svg";
import MenuIcon from "../Assets/menu-white-18-dp-1.svg"; 
import CloseIcon from "../Assets/close.svg"; 
import HomeIcon from "../Assets/home-white-18-dp.svg"; 
import ListIcon from "../Assets/list-alt-white-18-dp.svg"; 
import CommentIcon from "../Assets/comment-white-18-dp.svg"; 
import LibraryIcon from "../Assets/library-books-white-18-dp.svg"; 
import MobileLogo from "../Assets/mobile-logo.svg"; 
import { Link, useLocation } from 'react-router-dom'; 
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkToScrollTo, setLinkToScrollTo] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentLocation = useLocation(); 

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    setIsTransitioning(true);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, []);
  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setLinkToScrollTo(link);
    setIsMenuOpen(false);
  };

  const scrollToLink = () => {
    const element = document.querySelector(linkToScrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isMenuOpen && linkToScrollTo) {
      scrollToLink();
    }
  }, [isMenuOpen, linkToScrollTo]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={CodingXLogo} alt="Logo" className="Coding-X_Logo" />
      </div>

      <img
        src={isMenuOpen ? CloseIcon : MenuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />

      <div className="nav-links">
        <a
          href="#home"
          className="Home"
          onClick={(event) => handleLinkClick(event, "#home")}
        >
          Home
        </a>
        <a
          href="#features"
          className="Features"
          onClick={(event) => handleLinkClick(event, "#features")}
        >
          Features
        </a>
        <a
          href="#testimonials"
          className="Testimonials"
          onClick={(event) => handleLinkClick(event, "#testimonials")}
        >
          Testimonials
        </a>
        <a
          href="#courses"
          className="Courses"
          onClick={(event) => handleLinkClick(event, "#courses")}
        >
          Courses
        </a>
         <Link
          to="/privacy-policy"
          class="Privacy-Policy-for-navbar">
          Privacy Policy
        </Link>
      </div>

      {isMenuOpen && (
        <div
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          onTransitionEnd={() => setIsTransitioning(false)}
        >
          <img
            src={CloseIcon}
            alt="Close"
            className="close-icon"
            onClick={toggleMenu}
          />
          <img src={MobileLogo} alt="Logo" className="mobile-logo" />
          <div className="menu-items">
            <a href="#home" className="Home" onClick={toggleMenu}>
              <img src={HomeIcon} alt="Home" className="home_white_18dp" />
              Home
            </a>
            <a href="#features" className="Features" onClick={toggleMenu}>
              <img
                src={ListIcon}
                alt="Features"
                className="list_alt_white_18dp"
              />
              Features
            </a>
            <a
              href="#testimonials"
              className="Testimonials"
              onClick={toggleMenu}
            >
              <img
                src={CommentIcon}
                alt="Testimonials"
                className="comment_white_18dp"
              />
              Testimonials
            </a>
            <a href="#courses" className="Courses" onClick={toggleMenu}>
              <img
                src={LibraryIcon}
                alt="Courses"
                className="library_books_white_18dp"
              />
              Courses
            </a>
            <Link
                to="/privacy-policy"
                className="Privacy-Policy-for-navbar"
                onClick={toggleMenu}
              >
               <FontAwesomeIcon icon={faLock} className="privacy_policy_icon"style={{ fontSize: '1rem' }}  />
                Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
