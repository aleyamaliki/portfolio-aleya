import React from 'react'
import Logo from '../assets/logo.png'
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white py-4">
        <div className="flex justify-between items-center mx-10">
            <div className="items-center gap-4">
                <img src={Logo} alt="logo" width={100} />
                <p className="w-100 text-sm text-slate-500"> 
                    A passionate frontend developer with experiences using Reactjs and TailwindCSS.
                </p>
            </div>
            <div>
                <div className="pb-4">
                    <h1 className="text-lg font-bold text-center">Connect with me</h1>
                </div>

                <div className="flex items-center gap-8 text-2xl">
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
        <div className="w-350 h-px bg-gray-300 mx-auto my-4">
        </div>
        <h1 className="text-center text-sm text-slate-500">© 2025 Intan Nur Aleya Maliki. All rights reserved.</h1>
    </footer>
  )
}

export default Footer