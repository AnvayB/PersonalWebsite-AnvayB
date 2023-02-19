import './Contact.scss'
import shake from '../../images/shake.svg'
import down from '../../images/down.png'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const formRef = useRef()
  const [thanks, setThanks] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const msgConfirm = () => {
    alert("Message Sent!")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setThanks(true)
    emailjs.sendForm(
      'service_xeht855',
      'template_2q6uc8b',
      formRef.current,
      'SZctaaxt7KKpSXd4C'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <p align="center">
          Hi! <br />
          Thank you for visiting my website. <br /> <br />
          If you have any questions or comments, <br /> please fill out the form below and <br /> I'll get back to you as soon as I can!
          </p>
          {/* <p>
            If you:
            <ul>
              <li>Have any questions about my experience</li>
              <li>Have tips on how I could improve this website</li>
              <li>Want to offer me a job straightaway</li>
              <li>Just want to say Hi</li>
              then please fill out the form below and <br /> I'll get back to you as soon as I can!
            </ul>
          </p> */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Name' 
            name='user_name' 
          />
          {/* <input 
            type="text" 
            placeholder='Subject' 
            name='user_subject' 
          /> */}
          <input 
            type="email" 
            placeholder='Email' 
            name='user_email'
          />
          <textarea 
            placeholder=' Message' 
            name='message' 
            rows="5"
            onChange={handleChange}
            value={message}
          ></textarea>
          
          <button 
            type="submit"
            // onClick={() => setMessage("")}
            onClick={() => msgConfirm()}
          >Submit</button>
          {thanks && <span>Thanks for the message!</span>}
        </form>
        
        <a href="#intro" className='arrow' title='Return to Top'>
        <img src={down} alt="" />
      </a>
      </div>
    </div>
  )
}
