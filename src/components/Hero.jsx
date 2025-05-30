import React from 'react'
import { NavLink } from 'react-router'
import CatHi from '../assets/cat.png'

const Hero = () => {
  return (
    <div className="bg-[url(./src/assets/bg/bg-hero.png)] bg-cover bg-center min-h-screen px-4">
      <div className="flex flex-col items-center justify-center text-center min-h-screen">
        <div className="">
          <span className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#343434] text-3xl sm:text-5xl font-extrabold">
            Hello! Welcome to my portfolio
            <img src={CatHi} alt="cathi" className="w-20 sm:w-[90px] mb-4 sm:mb-10" />
          </span>
          
          <h1 className="font-bold text-[#343434] text-2xl sm:text-3xl mt-4">Intan Nur Aleya Maliki</h1>
          <h2 className="text-[#343434] text-base sm:text-lg mt-1">FRONTEND DEVELOPER</h2>

          <NavLink to="/aboutme">
            <button className="mt-6 px-6 py-2 bg-white border-2 border-[#99CAFF] text-[#343434] rounded-md shadow-md hover:bg-[#89A6C5]/50 hover:text-white transition-all duration-500 hover:outline-2 hover:outline-offset-2 hover:outline-[#99CAFF]">
              More Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
