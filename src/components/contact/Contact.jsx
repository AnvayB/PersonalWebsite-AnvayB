import './Contact.scss'
import shake from '../../images/shake.svg'
import { useState } from 'react'

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        {/*  */}
        <br />
        <p align="center">
          Hi! <br />
          Thank you for visiting my website. <br />
          Unfortunately, this Contact section is still under construction, <br /> but it will be up and working soon! <br />
          Until then, please contact me at <a href='mailto:anvay.bhanap@gmail.com'>anvay.bhanap@gmail.com</a> for any questions.
          <br /> <br /> Or if you want to offer me a job straightaway, I'll take that too. 😄
          </p>
        {/*  */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  )
}
