import React from 'react'
import Twiter from "../Images/twee.png"
import Linken from "../Images/linden.png"
import Medium from "../Images/medLogo.png"
import Telegram from "../Images/telegram.png"
import GithubLogo from "../Images/githubLogo.png"
import "./Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='sub-footer'>
            <h3>UBnkantah's Portfolio</h3>
            <p>Thank you for visiting my Personal Portfolio. </p>
            <p>Connect with me over my socials</p>
            <p>Soar higher🗼</p>
        </div>
        <div className='sub-footer'>
            <h3>QUICK LINK</h3>
            <p>HOME</p>
            <p>ABOUT ME</p>
            <p>SKILLS</p>
            <p>PROJECTS</p>
            <p>CONTACT ME</p>
        </div>
        <div className='sub-footer'>
            <h3>CONTACT INFO</h3>
            <p>+233559338522</p>
            <p>ubongnkantahuwem@gmail.com</p>
            <div className='info'>
                <div><img src={GithubLogo} alt="" /></div>
                <div><img src={Linken} alt="" /></div>
                <div><img src={Twiter} alt="" /></div>
                <div><img src={Medium} alt="" /></div>
                <div><img src={Telegram} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Footer