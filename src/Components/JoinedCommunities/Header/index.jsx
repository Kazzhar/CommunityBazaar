import React from "react";
import { useNavigate } from "react-router";
import "./styles.css";
import  logo from "../../../Assets/3(white).png" 

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="header-navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <span className="navbar-community-name">My Communities</span>
      <div className="navbar-links">
        <button onClick={() => navigate("/all-communities")} className="mycomm-button">All Communities</button>
      </div>
    </nav>
  )
}

export default Header;
