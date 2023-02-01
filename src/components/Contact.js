import React, { useRef} from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";

export default function Contact() {
  // const [name, setName]=useState('')
  // const [email, setEmail]=useState('')
  // const [message, setMessage]=useState('')
  const form = useRef();

  const handleSubmit= (e)=>{
    e.preventDefault()

    emailjs.sendForm('service_3rrr8cn', 
    'template_1ruzqeu',
     form.current,
      '2hWHPuZBlEgDKjvyV')
    .then((result)=>{
      console.log(result.text)
    }, (error)=> {
      console.log(error.text)
    })
    e.target.reset();
  }
  return (
    <div className='contact'>
        <div className='contact__info'>
            <h2>Contact Me....</h2>
            <p>i am currently available for any Entry level or Junior developer role,<br/> 
            i'm looking to collaborate with individuals, and company that aim to solve<br/>
            real life problem</p>
            <div className='contact__details'>
                <p>phone: 07048574809</p>
                <p>email: folarintaiye@gmail.com</p>
            </div>
        </div>

       
        <form onSubmit={handleSubmit} ref={form} className='contact__form'>
        <label>
      <span>Name:</span>
      <input required
      type="text"
      name='name'
      
      // onChange={(e)=>setName(e.target.value)}
      // value={name}
      />
    </label>

    <label>
      <span>Email:</span>
      <input required
      type="email"
      name='email'
      // onChange={(e)=>setEmail(e.target.value)}
      // value={email}
      />
    </label>

    <label>
      <span>Leave a message:</span>
      <textarea 
      //  onChange={(e)=>setMessage(e.target.value)}
      // value={message}
      name='message'
     
      />
    </label>

    <button className='contact__btn'>Submit</button>
    
   
   </form>
        
        </div>
      
  )
}
