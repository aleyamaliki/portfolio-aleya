import React from 'react'
import { NavLink } from 'react-router'

const Hero = () => {
  return (
    <div className="bg-[url('./assets/bg/hero-bg.gif')] bg-cover h-screen flex flex-col items-center justify-center text-center px-4">
      <div>
        <span className="inline-block animate-text-gradient bg-gradient-to-r from-[#FFD6BA] to-[#FFFECE] bg-clip-text text-transparent text-5xl font-extrabold">
          Hello! Welcome to my portfolio
        </span>
        <h1 className="font-bold text-white text-3xl mt-2">Intan Nur Aleya Maliki</h1>
        <h2 className="text-white mt-1">FRONTEND DEVELOPER</h2>

        <NavLink to="/aboutme">
            <button className="mt-6 px-6 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition">
            More Details
            </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Hero
