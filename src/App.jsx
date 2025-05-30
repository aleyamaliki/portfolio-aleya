import React from "react"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import Experiences from "./pages/Experiences"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <div>
    <div className="bg-[#DEEEFF] bg-cover min-h-screen text-[#343434]">
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
