import React from 'react'
import Footer from '../components/Footer'
import ExperienceList from '../components/experience/ExperienceList'
import PageTransition from '../components/PageTransition'

const Experiences = () => {
  return (
    <PageTransition className="min-h-screen flex flex-col">

      {/* Page content */}
      <main className="flex-grow px-4 sm:px-10 pt-10">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#89A6C5] text-shadow-white text-shadow-md mb-6">
          Experiences
        </h1>

        <ExperienceList />
      </main>

      <Footer />
    </PageTransition>
  )
}

export default Experiences
