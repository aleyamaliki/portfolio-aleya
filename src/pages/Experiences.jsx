import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExperienceList from '../components/experience/ExperienceList'

const Experiences = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page content */}
      <main className="flex-grow px-4 sm:px-10 pt-10">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#89A6C5] text-shadow-white text-shadow-md mb-6">
          Experiences
        </h1>

        <ExperienceList />
      </main>

      <Footer />
    </div>
  )
}

export default Experiences
