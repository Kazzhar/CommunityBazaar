import React from "react";
import Navbar from "./Navbar";
// import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="home-container">
    <div className="nav-container">
      <img src="2.png"/>
      <Navbar />
    </div>
    
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={ BannerBackground } alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            A Platform For Local Entrepreneurs {/* or something similar */}
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            neque mauris, congue pulvinar porttitor nec, rutrum nec ante.
            Vivamus sit amet nisi diam. Phasellus et porttitor nisi. Nulla
            ullamcorper feugiat turpis {/* add some nice content */}
          </p>
          <button className="secondary-button" onClick={() => navigate('/login')}>
            Sign Up <FiArrowRight />
          </button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Home;
