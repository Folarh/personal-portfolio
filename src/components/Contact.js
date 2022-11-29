import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [message, setMessage]=useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()

    console.log(name, email, message)
  }
  return (
    <div className='contact'>
        <div className='contact__info'>
            <h3>Contact Me....</h3>
            <p>i am currently available for any Entry level or Junior developer role,<br/> you can conact me if there's any job opening</p>
            <div className='contact__details'>
                <p>phone: 07048574809</p>
                <p>email: folarintaiye@gmail.com</p>
            </div>
        </div>

       
        <form onSubmit={(handleSubmit)} className='contact__form'>
        <label>
      <span>Name:</span>
      <input
      type="text"
      onChange={(e)=>setName(e.target.value)}
      value={name}
      />
    </label>

    <label>
      <span>Email:</span>
      <input
      type="email"
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
      />
    </label>

    <label>
      <span>Leave a message:</span>
      <textarea 
      rows="5"
       cols="48"
       onChange={(e)=>setMessage(e.target.value)}
      value={message}
      />
    </label>

    <button className='contact__btn'>Submit</button>
    
   
   </form>
        
        </div>
      
  )
}
