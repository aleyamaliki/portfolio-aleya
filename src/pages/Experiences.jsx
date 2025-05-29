import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import ExperienceList from '../components/experience/ExperienceList'

const Experiences = () => {
  return (
    <div>
        <Navbar />
          
        <h1 className="text-center text-2xl font-bold pt-10">Experiences</h1>

        <ExperienceList />

        <div className="fixed bottom-0 left-0 w-full">       
        <Footer />
        </div>

    </div>
  )
}

export default Experiences