import React from 'react'
// import {Link} from "react-router-dom"
import GitSearch from "../Images/GithubAPI.png"
import QuizApp from "../Images/QuizApp.png"
// import Timer from "../Image/countdown.png"
import HunglePg from "../Images/Huddle Landing-Pg.png"
import "./Project.css"

function Project() {
  return (
    <div className="project-container">
        <h1>PROJECTS</h1>
        <div className='project'>
            <div>
                <img src={QuizApp} alt="" />
            </div>
            <div>
                <img src={HunglePg} alt="" />
            </div>
            <div>
                <img src={GitSearch} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Project