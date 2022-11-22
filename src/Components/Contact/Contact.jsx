import React from 'react'
import "./Contact.css"
import ContactImg from "../Images/manOnTable.svg"

const Contact = () => {
  return (
    <div id='contact' className='contact-me'>
        <h2>CONTACT ME</h2>
        <div className="contact-box">
			<div className="left"
			variants={imgAnimate}
			>
                <img src={ContactImg} alt="" />
            </div>
			<form
			action = "mailto:ubongnkantahuwem@gmail.com" method = "post" enctype = "text/plain" class="right left">
				<input type="text" class="field" placeholder="Your Name" required />
				<input type="text" class="field" placeholder="Your Email" required />
				<input type="text" class="field" placeholder="Phone" required />
				<textarea placeholder="Message" class="field" required></textarea>
				<button type="submit" class="btn">Send</button>
			</form>
		</div>
        
    </div>
  )
}

export default Contact