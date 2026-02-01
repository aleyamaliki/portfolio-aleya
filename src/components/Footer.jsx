import React from 'react'
import Logo from '../assets/logo.png'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mx-auto max-w-6xl">
        
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <img src={Logo} alt="logo" width={100} />
          {/* <p className="text-sm text-slate-500 max-w-xs">
            A girl with a passion.
          </p> */}
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold text-[#304254] mb-2">Connect with me</h1>
          <div className="flex gap-6 text-2xl text-[#304254]">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=intannuraleya31@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> 
            </a>
            <a href="https://www.linkedin.com/in/aleya-maliki" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/aleyamaliki" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/aleyamaliki" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>    
          </div>
        </div>

      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gray-300 my-6"></div>

      {/* Bottom Text */}
      <h1 className="text-center text-sm text-slate-500">© 2026 Intan Nur Aleya Maliki. All rights reserved.</h1>
    </footer>
  )
}

export default Footer
