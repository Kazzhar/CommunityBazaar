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
      <span className="navbar-community-name">Community Name</span>
      <div className="navbar-links">
        <button onClick={() => navigate("/create-post")} className="navbar-link">Create Post</button>
        <button onClick={() => navigate("/cart")} className='go-to-cart'> <AiOutlineShoppingCart/> Cart</button>
      </div>

    </nav>
  )
  
  
  // <header className='home-header'>
  //   {/* <nav className="home-nav"> */}
  //     {/* <div className="nav-logo-container">
  //       <img src="../../../../public/1.png" alt=''/>
  //     </div> */}

  //     <h2>Products in Community</h2>

  //   {/* </nav> */}
  //   {/* <h1>IIIT Lucknow</h1>
  //   <h2>
  //     <span>“</span> Discover the hidden gems in your community  <span>”</span>
  //   </h2>
  //   <p>
  //   Empowering local businesses,  <br /> one transaction at a time
  //   </p> */}
  // </header>
};

export default Header;
