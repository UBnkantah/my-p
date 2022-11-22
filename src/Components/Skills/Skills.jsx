import React from 'react'
import CssImg from "../Images/CssImg.png"
import BootImg from "../Images/BootImg.png"
import JsLogo from "../Images/JS_Logo.png"
import HTML from "../Images/HTMLC.png"
import jQuery from "../Images/jqueryc.png"
import wordPress from "../Images/WPress.png"
import Redux from "../Images/ReduxC.png"
import ReactC from "../Images/ReactC.png"
import RestAPI from "../Images/RestApi.png"
import TailCSS from "../Images/tailcss.webp"
import "./Skills.css"

function Skills() {
  return (
    <div id='skills' className='skills-container'>
        <h1>SKILLS</h1>
        <div className="skills">
                <div className='img-container'>
                    <img src={CssImg} alt="Css" />
                </div>
                <div className='img-container'>
                    <img src={HTML} alt="" />
                </div>
                <div className='img-container'>
                    <img src={TailCSS} alt="" />
                </div>
                <div className='img-container'>
                    <img src={ReactC} alt="" />
                </div>
                <div className='img-container'>
                    <img src={RestAPI} alt="" />
                </div>
                <div className='img-container'>
                    <img src={Redux} alt="" />
                </div>
                <div className='img-container'>
                    <img src={JsLogo} alt="" />
                </div>
                <div className='img-container'>
                    <img src={wordPress} alt="" />
                </div>
                <div className='img-container'>
                    <img src={BootImg} alt="" />
                </div>
                <div className='img-container'>
                    <img src={jQuery} alt="" />
                </div>
            
        </div>
    </div>
  )
}

export default Skills