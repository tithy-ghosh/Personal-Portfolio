import React from 'react'
import Navbar from './Features/Navbar/Navbar'
import Hero from './Features/Hero/Hero'
import About from './Features/AboutMe/About'
import Education from './Features/Education/Education'
import SkillsSection from './Features/Skills/Skills'
import Projects from './Features/Projects/Projects'
import Contact from './Features/Contact/Contact'

const App = () => {
  return (
    <div className='hero-glow w-full h-full '>
      <Navbar/>
      <Hero/>
      <About/>
      <Education />
      <SkillsSection />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
