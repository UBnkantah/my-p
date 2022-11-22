import React from 'react'
import GitSearch from "../Images/GithubAPI.png"
import QuizApp from "../Images/QuizApp.png"
import Timer from "../Images/SetTime.png"
import HunglePg from "../Images/Huddle Landing-Pg.png"
import "./Project.css"

function Project() {
  return (
    <div id='project' className="project-container">
        <h1>PROJECTS</h1>
        <div className='project'>
            <div className='sub_project'>
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
            </div>
            <div className='sub_project'>
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
            </div>
            <div className='sub_project'>
                <div className="project-img">
                    <img src={HunglePg} alt="" />
                </div>
                <hr />
                <div className="view">
                    <h3>HUNDLE LANDING PAGE</h3>
                    <button>
                        <a href="https://polite-bonbon-4e14a1.netlify.app/" target="_blank">VIEW</a>
                    </button>
                </div>
            </div>
            <div className='sub_project'>
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
            </div>
        </div>
    </div>
  )
}

export default Project