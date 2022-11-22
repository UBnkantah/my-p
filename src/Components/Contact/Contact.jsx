import React from 'react'
import "./Contact.css"
import ContactImg from "../Images/manOnTable.svg"
import {motion, Variants} from "framer-motion"

const imgAnimate={
	offscreen:{x:-100, opacity:0},
	onscreen:{
		x:0,
		opacity: 1,
		rotate:[0,10,0],
		transition: {type: "string",
		bounce: 0.5,
		duration: 0.8
		}
  
	}
  }

const Contact = () => {
  return (
    <div id='contact' className='contact-me'>
        <h2>CONTACT ME</h2>
        <motion.div className="contact-box"
		initial={"offscreen"}
		whileInView={"onscreen"}
		viewport={{once:false, amount:1}}
		transition={{staggerChildren:0.5}}
		>
			<motion.div className="left"
			variants={imgAnimate}
			>
                <img src={ContactImg} alt="" />
            </motion.div>
			<motion.form
			variants={imgAnimate}
			action = "mailto:ubongnkantahuwem@gmail.com" method = "post" enctype = "text/plain" class="right left">
				<input type="text" class="field" placeholder="Your Name" required />
				<input type="text" class="field" placeholder="Your Email" required />
				<input type="text" class="field" placeholder="Phone" required />
				<textarea placeholder="Message" class="field" required></textarea>
				<button type="submit" class="btn">Send</button>
			</motion.form>
		</motion.div>
        
    </div>
  )
}

export default Contact