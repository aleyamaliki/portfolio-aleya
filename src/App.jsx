import React from "react"
import { Route, Router, Routes } from "react-router"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import Navbar from "./components/NavBar"
import Experiences from "./pages/Experiences"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <div>
    <div className="bg-[#FFD0C7] bg-cover min-h-screen text-black">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
    </div>
  )
}

export default App
