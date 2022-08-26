import React from 'react'
import AboutMe from '../../Components/AboutMe/AboutMe';
import Hero from '../../Components/Hero/Hero';
import MySkills from '../../Components/MySkills/MySkills';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

function MainPage() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
      <AboutMe />
      </div>
      <div>
      <MySkills />
      </div>
      
    </div>
  )
}

export default MainPage