import React from 'react'
import { motion, Variants } from "framer-motion"
import { FaFileDownload } from "react-icons/fa"
import HeadImg from "../Images/mosop.png"
import Resume from "../Images/UBResume.pdf"
import "./Header.css"

const imgAnimate={
  offscreen:{x:-100, opacity:0},
  onscreen:{
      x:0,
      opacity: 1,
      rotate:[0,10,0],
      transition: {type: "string",
      bounce: 0.5,
      duration: 1
      }

  }
}

const txtAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity: 1,
  transition: {type: "string",
    bounce: 0.4,
    duration: 1
  }
  }
}

const Header = () => {
  return (
    <motion.div id='header' className='header'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:1}}
      transition={{staggerChildren:0.5}}
    >
        <motion.div className="head-details div">
            <motion.h1
            variants={txtAnimate}
            >Hi there, I'm Ubong😎 </motion.h1>
            <motion.p
            variants={txtAnimate}
            >I'm a Software Developer who is very Passionate about his coding skills, developing Websites, Learning New Technologies, can work Perfectly in a team and give brilliant ideas for the Positive Progression of any Organization. </motion.p>
            <motion.button
            variants={txtAnimate}
            >
              <FaFileDownload />
              <a href={Resume} target="_blank">DOWNLOAD CV</a>
            </motion.button>
        </motion.div>
        <motion.div className="head-img"
        variants={imgAnimate}
        >
            <img src={HeadImg} alt="" />
        </motion.div>
    </motion.div>
  )
}

export default Header