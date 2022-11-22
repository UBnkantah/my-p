import React from 'react'
import { motion, Variants } from "framer-motion"
import { FaFileDownload } from "react-icons/fa"
import HeadImg from "../Images/mosop.png"
import Resume from "../Images/UBResume.pdf"
import "./Header.css"

const Header = () => {
  return (
    <div id='header' className='header'>
        <div className="head-details div">
            <h1>Hi there, I'm Ubong😎 </h1>
            <p>I'm a Software Developer who is very Passionate about his coding skills, developing Websites, Learning New Technologies, can work Perfectly in a team and give brilliant ideas for the Positive Progression of any Organization. </p>
            <button>
              <FaFileDownload />
              <a href={Resume} target="_blank">DOWNLOAD CV</a>
            </button>
        </div>
        <div className="head-img">
            <img src={HeadImg} alt="" />
        </div>
    </div>
  )
}

export default Header