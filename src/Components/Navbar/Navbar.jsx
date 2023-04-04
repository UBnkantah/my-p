import React from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("responsive_navbar");
  }
  return(
    <div className="navbar">
        <h1>Personal</h1>
        <ul ref={NavRef}>
          <li><a href="/" onClick={showNavbar}>HOME</a></li>
          <li><a href="#about" onClick={showNavbar}>ABOUT US</a></li>
          <li><a href="#skills" onClick={showNavbar}>SKILLS</a></li>
          <li><a href="#projects" onClick={showNavbar}>PROJECTS</a></li>
          <li><a href="#contact" onClick={showNavbar}>CONTACT US</a></li>
          <button className="nav-btn nav-close" onClick={showNavbar}>
            <FaTimes size={20} />
          </button>
        </ul>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars size={20} />
        </button>
    </div>
  )
}

export default Navbar;