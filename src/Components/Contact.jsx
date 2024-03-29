import React, { useEffect } from 'react'
import '../CSS/contact.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact(props) {


  useEffect(()=>{
    console.log(props.icons)
  })


  return (
    <div className='contact-section' id='contact'>
    <h2>Contact Me</h2>
        <div className='contact-wrapper'>
            <div className='contact-info'>
              <div className='phone'><LocalPhoneIcon className='contact-icon' /> <p>{props.about.phoneNumber}</p></div>
              <div className='email'><EmailIcon className='contact-icon' /> <p>{props.about.contactEmail}</p></div>
              <div className='address'><LocationOnIcon className='contact-icon' /> <p>{props.about.address}</p></div>
              <div className='social-icons'>
                {props.icons.map((item)=>{
                     return item.enabled&&<a href={item.url}>
                        <img src={item.image.url} alt=''></img>
                      </a>
                })}
              </div>
              <button>Download CV</button>
            </div>
            <div className='contact-form'>
              <input className='input-name' placeholder='Your Email Address'></input>
              <input className='input-email' placeholder='Your Full Name'></input>
              <textarea className='message' placeholder='Your Message' rows={3}></textarea>
              <button>submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact