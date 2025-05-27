import React from 'react'
import Navbar from '../components/NavBar'
import CardGrid from '../components/CardGrid'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center text-2xl font-bold pt-10 ">Hackathon projects</h1>
        <CardGrid />
      </div>
    </div>
  )
}

export default Projects