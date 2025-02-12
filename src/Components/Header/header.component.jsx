import { Component } from "react";
import { useState } from "react";
import "./header.styles.css";
import logo from "../../Images/logo.png";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="container">
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <ul id="sideMenu" className={menuOpen ? "open" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-text">
          <p>Hope/Mazzystar_fanclub</p>
          <h1>
            Hi, I'm <span>Himal</span>. <br></br>I am an artist and <br></br> a
            photographer.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
