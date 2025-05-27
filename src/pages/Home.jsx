import React from 'react'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="bg-[url('./assets/bg/hero-bg.gif')] bg-cover h-screen overflow-hidden">
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home