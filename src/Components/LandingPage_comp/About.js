import React from 'react'
// import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../../Assets/about-background-image.png"
import {BsFillPlayCircleFill} from "react-icons/bs" 


const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            {/* <img src={AboutBackground} alt=''/> */}
        </div>
        <div className='about-section-image-container'>
            <img className='about-background-image' src={AboutBackgroundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Growth By The People For The People
            </h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            neque mauris, congue pulvinar porttitor nec, rutrum nec ante.
             {/* add about us later */}
            </p>
            <p className='primary-text'>
            Vivamus sit amet nisi diam. Phasellus et porttitor nisi. Nulla
            ullamcorper feugiat turpis 
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About