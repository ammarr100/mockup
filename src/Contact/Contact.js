import React from 'react';
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitch} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import { IconContext } from 'react-icons';
import './Contact.css'
const Contact = () => {
  return (
      <>
      <IconContext.Provider value={{color : '#F7CA40'
       }}>
          <section className='contact'>
              <div className='contact-container container'>
                  <div className='contact-left' data-aos='flip-left'>
                    <h2>Join our Newsletter</h2>
                    <h1>Contact Us</h1>
                    <p>3045 10 Sunrize Avenue, 123-456-7890 <br />
                    Mon – Fri: 9:00 am – 8:00 pm,
                    Sat – Sun: 9:00 am – 10 pm <br />
                    ammarr@msn.com
                    </p>
                    <h1>Follow Us</h1>
                    <div className='social-icons'>
                    <ul>
                    <li><BsFacebook/></li>
                    <li><BsInstagram/></li>
                    <li><BsTwitch/></li>
                    <li><BsYoutube/></li>
                    </ul>
                    <p>©2021 Privacy policy</p>
                    </div>
                    
                  </div>
                  <div className='contact-right' data-aos='zoom-in'>
                
                  <input className='inputArea' type="text" placeholder='Enter your Name' />
                    <input className='inputArea' type="email" placeholder='Enter your Email Address' />
                    <textarea className='inputArea' name="" id="" cols="30" rows="10"></textarea>
                    <button className='advise-btn'><a href="">Submit</a></button>
                
                    
                  </div>
              </div>
          </section>
          </IconContext.Provider>
      </>
  )
};

export default Contact;
