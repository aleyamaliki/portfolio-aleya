import React from 'react'
import Footer from '../components/Footer'
import AboutDesc from '../components/aboutme/AboutDesc'
import Education from '../components/aboutme/education/Education'
import Skills from '../components/aboutme/skills/Skills'
import Language from '../components/aboutme/language/Language'
import Interest from '../components/aboutme/interest/Interest'
import PageTransition from '../components/PageTransition'

const AboutMe = () => {
  return (
    <PageTransition>
      
        <AboutDesc />
        <Education />
        <Skills />
        <Language />
        <Interest />

      <Footer />
    </PageTransition>
  )
}

export default AboutMe