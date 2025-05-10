import './index.css'
import React from 'react'
import Nav from './MainComponents/Nav'
import { useState } from 'react'
import SideMenu from './Nav/SideMenu'
import HeroPage from './MainComponents/HeroPage'
import AboutMe from './MainComponents/AboutMe'
import Skills from './MainComponents/Skills'
import Projects from './MainComponents/Projects'
import Contact from './MainComponents/Contact'
import Footer from './MainComponents/Footer'
function App() {
  const [clickMenu, setClickMenu] = useState(false);
  return (
    <div className='bg-[#010215] relative overflow-hidden '>
      <Nav clickMenu={clickMenu} setClickMenu={setClickMenu} />
      <SideMenu clickMenu={clickMenu} setClickMenu={setClickMenu} />
      <div className="containerAppliactaion    w-full  flex flex-col items-center  ">
        
        <HeroPage />
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        
      </div>
    </div>
  )
}

export default App