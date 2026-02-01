import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../assets/logo.png'
import { FaX } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState (false)
  const activeLink = "text-[#304254] font-bold"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky top-0 z-50 overflow-hidden ${isScrolled ? 'bg-[#DEEEFF]' : 'bg-[#DEEEFF]/70'} transition-colors duration-500 ease-in-out shadow-xl shadow-black/10  rounded-bl-2xl rounded-br-2xl text-[#343434]`}>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col items-center gap-4 pb-4">
              <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : ""} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/experiences" className={({ isActive }) => isActive ? activeLink : ""} onClick={() => setIsMenuOpen(false)}>Experiences</NavLink>
              <NavLink to="/aboutme" className={({ isActive }) => isActive ? activeLink : ""} onClick={() => setIsMenuOpen(false)}>About Me</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>  
    </div>
  )
}

export default Navbar