import React from 'react'
import { NavLink } from 'react-router'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const activeLink = "text-[#E69DB8] font-bold"

  return (
    <div className="sticky top-0 overflow-hidden bg-[#EBE8DB]/40 shadow-xl shadow-black/10  rounded-bl-2xl rounded-br-2xl">
      <nav className=" flex justify-between items-center p-4 ">
          <div className="">
              <NavLink 
              to="/"
              >
              <img src={Logo} alt="logo" width={100}/>
              </NavLink>
          </div>
          <div className="flex gap-6">
              <NavLink 
              to="/projects"
              className={({ isActive }) => 
              (isActive ? activeLink : "")
              }
              >
              Projects
              </NavLink>
              <NavLink 
              to="/experiences"
              className={({ isActive }) => 
              (isActive ? activeLink : "")
              }
              >
              Experiences
              </NavLink>
              <NavLink 
              to="/aboutme"
              className={({ isActive }) => 
              (isActive ? activeLink : "")
              }
              >
              About Me
              </NavLink>
          </div>
      </nav>
    </div>
  )
}

export default Navbar