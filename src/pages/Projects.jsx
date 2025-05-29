import React from 'react'
import Navbar from '../components/NavBar'
import HackathonCardGrid from '../components/HackathonCardGrid'
import SchoolCardGrid from '../components/SchoolCardGrid'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center text-2xl font-bold pt-10 ">Hackathon projects</h1>
        <HackathonCardGrid />
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold pt-10 ">School projects</h1>
        <SchoolCardGrid />
      </div>
      <Footer />
    </div>
  )
}

export default Projects