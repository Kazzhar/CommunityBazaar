import React from 'react';
import './styles.css';
import  logo from "../../../Assets/3(white).png" 
import { useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="header-navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <span className="navbar-community-name">All Communities</span>
      <div className="navbar-links">
      <button className="mycomm-button" onClick={()=>navigate("/2d65d411-d402/my-communities")}>My Communities</button>
        {/* <button onClick={() => navigate("/create-post")} className="navbar-link">Create Post</button>
        <button onClick={() => navigate("/cart")} className='go-to-cart'> <AiOutlineShoppingCart/> Cart</button> */}
      </div>

    </nav>
  )
  
};

export default Header;
