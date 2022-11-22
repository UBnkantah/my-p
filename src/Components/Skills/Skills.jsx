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
import {motion, Variant} from "framer-motion"
import "./Skills.css"

const imageAnimate={
    onScreen: {
        scale: [1, 1, 1.2, 1.2, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
        },
    }
    
}


const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <h1>SKILLS</h1>
        <div className="skills">
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={CssImg} alt="Css" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={HTML} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={TailCSS} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={ReactC} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={RestAPI} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={Redux} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={JsLogo} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={wordPress} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={BootImg} alt="" />
                </motion.div>
                <motion.div 
                className='img-container'
                animate={"onScreen"}
                variants={imageAnimate}
                >
                    <img src={jQuery} alt="" />
                </motion.div>
            
        </div>
    </div>
  )
}

export default Skills