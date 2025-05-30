import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import PinProjectCard from '../components/projects/PinProjectCard'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />

        <div className="py-10">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 px-4 sm:px-20 md:px-60">
          <h1 className="text-2xl font-bold text-[#89A6C5] text-shadow-white text-shadow-md">
            Pinned Project
          </h1>
          <NavLink to="/projects">
            <p className="underline underline-offset-4 text-[#343434]/50 hover:text-[#343434] transition text-sm sm:text-base">
              See more
            </p>
          </NavLink>
        </div>

        <PinProjectCard />

        </div>

        <Footer />
    </div>
  )
}

export default Home