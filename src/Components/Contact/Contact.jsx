import React, { useState } from 'react'
import "./Contact.css"
import ContactImg from "../Images/manOnTable.svg"
import {db} from "../../firebase"
import {toast} from "react-toastify"
import { addDoc, collection } from 'firebase/firestore'



const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);



const handleSubmit = async(e) => {
	e.preventDefault()
	try{
		setLoading(true)
		const data = await addDoc(collection(db, "contact"), {name, email, phone, message})
		toast.success(`Message Received ${name}, I will get back to you shortly`, {
			position: "bottom-left"
		})
		console.log(data)
		
	}catch(err){
		console.log(err)
		toast.error(err.code, {
			position: "bottom-left"
		})
	}
	setName("")
		setMessage("")
		setPhone("")
		setMessage("")
		setLoading(false)
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
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<input 
					type="email" 
					className="field" 
					name="email" 
					value={email}
					placeholder="Your Email"
					required 
					onChange={(e) => setEmail(e.target.value)}
				/>
				
				<input 
					type="number" 
					className="field" 
					name='phone' 
					value={phone}
					placeholder="Phone" 
					required 
					onChange={(e) => setPhone(e.target.value)}
				/>

				<textarea 
					placeholder="Message" 
					name='message' 
					className="field" 
					value={message}
					required
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				<button type="submit" className="btn">{loading ? "Sending..." : "Send"}</button>
			</form>
		</div>
        
    </div>
  )
}

export default Contact