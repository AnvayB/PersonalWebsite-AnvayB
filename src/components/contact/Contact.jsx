import './Contact.scss'
import shake from '../../images/shake.svg'
// import { useState } from 'react'

export default function Contact() {

  // const [message, setMessage] = useState(false)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true)
  // }

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
          Thank you for visiting my website. <br /> <br />
          This Contact section is still under construction, but it will be up and working soon! <br /> <br />
          Until then, please contact me at <a href='mailto:anvay.bhanap@gmail.com'>anvay.bhanap@gmail.com</a> for any questions.
          <br /> <br /> Or if you want to offer me a job straightaway, I'll take that too. 😄
          </p>
        {/*  */}
        <form>
          <input type="text" placeholder='Name' name='user_name' />
          <input type="text" placeholder='Subject' name='user_subject' />
          <input type="email" placeholder='Email' name='user_email' />
          <textarea placeholder=' Message' name='message' rows="5"></textarea>
          <button type="submit">Submit</button>

        </form>
        
      </div>
    </div>
  )
}
