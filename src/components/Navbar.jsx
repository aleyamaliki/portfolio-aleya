import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import Logo from '../assets/logo.png'
import { FaX } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState (false)
  const activeLink = "text-[#E69DB8] font-bold"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky top-0 overflow-hidden ${isScrolled ? 'bg-[#EBE8DB]' : 'bg-[#EBE8DB]/70'} transition-colors duration-500 ease-in-out shadow-xl shadow-black/10  rounded-bl-2xl rounded-br-2xl`}>
      <nav className=" flex justify-between items-center p-4 ">
        <div className="">
          <NavLink to="/">
            <img src={Logo} alt="logo" width={100}/>
          </NavLink>
        </div>

        {/* Hamburger Menu (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaX size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links (desktop) */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : ""}>Projects</NavLink>
          <NavLink to="/experiences" className={({ isActive }) => isActive ? activeLink : ""}>Experiences</NavLink>
          <NavLink to="/aboutme" className={({ isActive }) => isActive ? activeLink : ""}>About Me</NavLink>
        </div>

          {/* <div className="flex gap-6">
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
          </div> */}
      </nav>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : ""} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/experiences" className={({ isActive }) => isActive ? activeLink : ""} onClick={() => setIsMenuOpen(false)}>Experiences</NavLink>
          <NavLink to="/aboutme" className={({ isActive }) => isActive ? activeLink : ""} onClick={() => setIsMenuOpen(false)}>About Me</NavLink>
        </div>
      )}  
    </div>
  )
}

export default Navbar