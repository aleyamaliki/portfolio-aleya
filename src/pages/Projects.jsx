import React from 'react'
import Navbar from '../components/Navbar'
import HackathonCardGrid from '../components/projects/HackathonCardGrid'
import SchoolCardGrid from '../components/projects/SchoolCardGrid'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-20">
        <h1 className="text-center text-3xl font-bold py-10 text-[#89A6C5] text-shadow-white text-shadow-md ">Hackathon projects</h1>
        <HackathonCardGrid />
      </div>
      {/* <div className="pb-30">
        <h1 className="text-center text-3xl font-bold py-10 text-[#89A6C5] text-shadow-white text-shadow-md ">School projects</h1>
        <SchoolCardGrid />
      </div> */}
      <Footer />
    </div>
  )
}

export default Projects