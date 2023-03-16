import React, { useState } from 'react'
import "./Contact.css"
import ContactImg from "../Images/manOnTable.svg"
import {db} from "../../firebase"



const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");



const handleSubmit = (e) => {
	e.preventDefault()

	db.collection("contact").add({
		name: name,
		email: email,
		phone: phone,
		message: message
	}).then(() => {
		alert("Message Sent")
	}).catch((err) => {
		alert(err.message)
	})

	setName("")
	setEmail("")
	setPhone("")
	setMessage("")
}
  return (
    <div id='contact' className='contact-me'>
        <h2>CONTACT ME</h2>
        <div className="contact-box">
			<div className="left">
                <img src={ContactImg} alt="" />
            </div>
			<form className="right left" onSubmit={handleSubmit}>
				<input 
					type="text" 
					className="field" 
					name='name' 
					placeholder="Your Name" 
					required 
					onChange={(e) => setName(e.target.value)}
				/>

				<input 
					type="email" 
					className="field" 
					name="email" 
					placeholder="Your Email"
					required 
					onChange={(e) => setEmail(e.target.value)}
				/>
				
				<input 
					type="text" 
					className="field" 
					name='phone' 
					placeholder="Phone" 
					required 
					onChange={(e) => setPhone(e.target.value)}
				/>

				<textarea 
					placeholder="Message" 
					name='message' 
					className="field" 
					required
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				<button type="submit" className="btn">Send</button>
			</form>
		</div>
        
    </div>
  )
}

export default Contact