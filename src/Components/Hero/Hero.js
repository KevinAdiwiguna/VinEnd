import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
    <div className="hero-class" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-content-text">
            <span className="display-5">Hi I AM KEVIN</span>
            <div className="border px11 py-1">
              <span className="fs-4  py-2">FrontEnd Dev</span>
              <span className="fs-4 border-top">UI & UX || Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1F0E35" fill-opacity="1" d="M0,288L120,256C240,224,480,160,720,165.3C960,171,1200,245,1320,282.7L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </>
  );
}

export default Hero;
