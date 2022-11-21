import React from 'react'
import Navbar from "../Navbar/Navbar"
import Header from '../Header/Header'
import Skills from "../Skills/Skills"
import Project from "../Project/Project"
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <div>
        <Navbar />
        <Header />
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </div>
  )
}

export default Main