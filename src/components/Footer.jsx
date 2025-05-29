import React from 'react'
import Logo from '../assets/logo.png'
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white py-8">
        <div className="flex justify-between items-center mx-10">
            <div className="flex items-center">
                <img src={Logo} alt="logo" width={100} />
            </div>

            <div>
                <h1 className="text-lg font-bold">Connect with me</h1>
                <p className="flex gap-2 items-center">
                    <FaEnvelope /> intannuraleya31@gmail.com
                </p>
                <p className="flex items-center gap-8">
                    <FaLinkedin />
                    <FaTelegram />
                    <FaTwitter />
                    <FaGithub />
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer