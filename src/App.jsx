import React from "react"
import { Route, Routes, useLocation } from "react-router"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import Experiences from "./pages/Experiences"
import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"

function App() {
  const location = useLocation()

  return (
    <div>
    <div className="bg-[#DEEEFF] bg-cover min-h-screen text-[#343434]">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
    </div>
  )
}

export default App
