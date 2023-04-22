import React from "react";
import Home from '../../Components/LandingPage_comp/Home';
import About from '../../Components/LandingPage_comp/About';
import Testimonials from '../../Components/LandingPage_comp/Testimonials';
import Contact from '../../Components/LandingPage_comp/Contact'
import './landing_page.css'
export const LandingPage = () => {
  return (
    <div className="App">
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <About />
      </section>

      {/* <Work /> ........... wanna add? ts:20:40 */}
      <section id="testimonials">
        <Testimonials />{" "}
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};
