import React from 'react'
import Navbar from '../components/NavBar'
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
          <div className="flex justify-between items-center md:px-60 sm:px-20">
            <h1 className="text-xl font-bold ">Pinned Project</h1>
              <NavLink to="/projects">
                <p className="underline underline-offset-4 text-white hover:text-slate-500 transition">See more</p>
              </NavLink>
          </div>
            <PinProjectCard />
        </div>

        <Footer />
    </div>
  )
}

export default Home