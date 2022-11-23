import React from 'react'
import Twiter from "../Images/twee.png"
import Linken from "../Images/linden.png"
import Medium from "../Images/medLogo.png"
import Telegram from "../Images/telegram.png"
import GithubLogo from "../Images/githubLogo.png"
import "./Footer.css"


function Footer() {
  return (
    <div id='footer' className='footer'>
        <div className='sub-footer'>
            <h3>UBnkantah's Portfolio</h3>
            <p>Thank you for visiting my Personal Portfolio. </p>
            <p>Connect with me over my socials</p>
            <p>Soar higher🗼</p>
        </div>
        <div className='sub-footer'>
            <h3>QUICK LINK</h3>
           <a href="/"><p>HOME</p></a> 
           <a href="#about"><p>ABOUT ME</p></a> 
           <a href="#skills"><p>SKILLS</p></a> 
           <a href="#projects"><p>PROJECTS</p></a> 
           <a href="#contact"><p>CONTACT ME</p></a> 
        </div>
        <div className='sub-footer'>
            <h3>CONTACT INFO</h3>
            <p>+233559338522</p>
            <p>ubongnkantahuwem@gmail.com</p>
            <div className='info'>
                <div> <a href="https://github.com/UBnkantah"><img src={GithubLogo} alt="" /></a></div>
                <div> <a href="https://www.linkedin.com/in/ubong-nkantah-015749215/"><img src={Linken} alt="" /></a></div>
                <div> <a href="https://twitter.com/neljason00?t=lhB4CtfSIu8otMGJ7YbkYA&s=09"><img src={Twiter} alt="https://twitter.com/neljason00?t=lhB4CtfSIu8otMGJ7YbkYA&s=09" /></a></div>
                <div> <a href="https://medium.com/@ubongnkantahuwem"><img src={Medium} alt="https://medium.com/@ubongnkantahuwem" /></a></div>
                <div> <a href="https://t.me/UBnkantah"><img src={Telegram} alt="https://t.me/UBnkantah" /></a></div>
            </div>
        </div>
    </div>
  )
}

export default Footer