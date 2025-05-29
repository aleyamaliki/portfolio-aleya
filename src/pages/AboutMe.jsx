import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import AboutDesc from '../components/aboutme/AboutDesc'
import Education from '../components/aboutme/education/Education'
import Skills from '../components/aboutme/skills/Skills'
import Language from '../components/aboutme/language/Language'
import Interest from '../components/aboutme/interest/Interest'

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      
        <AboutDesc />
        <Education />
        <Skills />
        <Language />
        <Interest />

      <Footer />
    </div>
  )
}

export default AboutMe