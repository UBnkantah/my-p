import React from 'react'
import GitSearch from "../Images/GithubAPI.png"
import QuizApp from "../Images/QuizApp.png"
import gymImg from "../Images/hero-img-mob.png"
import fytoImg from "../Images/blog-third-img.png"
import Timer from "../Images/setTime.png"
import manaPg from "../Images/mana.png"
import {motion, Variants} from "framer-motion";
import "./Project.css"

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

function Project() {
  return (
    <div id='project' className="project-container">
        <h1>PROJECTS</h1>
        <motion.div 
        className='project'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
        >
            <motion.div className='sub_project'
            variants={imgAnimate}
            whileHover={{scale: 1.1}}>
                <div className="project-img">
                    <img src={gymImg} alt="" />
                </div>
                <hr />
                <div className="view">
                    <h3>Gymate Platform</h3>
                    <button>
                        <a href="https://gymate-psi.vercel.app/" target="_blank">VIEW</a>
                    </button>
                </div>
            </motion.div>

            <motion.div className='sub_project'
            variants={imgAnimate}
            whileHover={{scale: 1.1}}>
                <div className="project-img">
                    <img src={fytoImg} alt="" />
                </div>
                <hr />
                <div className="view">
                    <h3>Toka Nft Platform</h3>
                    <button>
                        <a href="https://fyto-app.vercel.app/" target="_blank">VIEW</a>
                    </button>
                </div>
            </motion.div>
            
            <motion.div className='sub_project'
            variants={imgAnimate}
            whileHover={{scale: 1.1}}>
                <div className="project-img">
                    <img src={QuizApp} alt="" />
                </div>
                <hr />
                <div className="view">
                    <h3>QUIZ APP</h3>
                    <button>
                        <a href="https://relaxed-dusk-b53dcc.netlify.app/" target="_blank">VIEW</a>
                    </button>
                </div>
            </motion.div>
            <motion.div className='sub_project' whileHover={{scale: 1.1}}>
                <div className="project-img">
                    <img src={Timer} alt="" />
                </div>
                <hr />
                <div className="view">
                    <h3>COUNTDOWN TIMER</h3>
                    <button>
                        <a href="https://quiet-licorice-b541f7.netlify.app/" target="_blank">VIEW</a>
                    </button>
                </div>
            </motion.div>
            <motion.div 
            variants={imgAnimate}
            className='sub_project' 
            whileHover={{scale: 1.1}}>
                <div className="project-img">
                    <img src={manaPg} alt="" />
                </div>
                <hr />
                <div className="view">
                    <h3>MANAGE LANDING PAGE</h3>
                    <button>
                        <a href="https://manage-react-pg.vercel.app/" target="_blank">VIEW</a>
                    </button>
                </div>
            </motion.div>
            <motion.div 
            className='sub_project' 
            variants={imgAnimate}
            whileHover={{scale: 1.1}}>
                <div className="project-img">
                    <img src={GitSearch} alt="" />
                </div>
                <hr />
                <div className="view">
                    <h3>GITHUB SEARCH</h3>
                    <button>
                        <a href="https://github-search-jsx.vercel.app/" target="_blank">VIEW</a>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Project