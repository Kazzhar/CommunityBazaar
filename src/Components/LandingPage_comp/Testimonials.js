import React from "react";
// import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import {BsStarHalf , BsStarFill} from "react-icons/bs"
import logo from "../../Assets/sonam-wangchuk.jpg"

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading1">What They Are Saying</h1>
        <p className="primary-text">
         the people have spoke
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={logo} alt="" />
        <p className="review">
        " It's great to see that you are focusing on
         providing a platform that supports and promotes small
          businesses and individuals, 
          as they are often underserved in the e-commerce industry.
           Overall, your project seems to align with the growing trend of 
           community-based and sustainable commerce, and has the potential 
           to make a significant contribution to your local community. "
        </p>
        <div className="testimonials-stars-container">
          <BsStarFill/>
          <BsStarFill/>
          <BsStarFill/>
          <BsStarFill/>
          <BsStarHalf/>
        </div>
        <h2>Sonam Wangchuk</h2>
      </div>
    </div>
  );
};

export default Testimonial;