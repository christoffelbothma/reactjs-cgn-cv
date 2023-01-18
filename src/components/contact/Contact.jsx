import React from 'react'
import './contact.css'
import {BiMailSend} from 'react-icons/bi'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_unmikwq', 'template_90awnw4', form.current, 'LwU5zQJYhBqW2GOL_')

    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <BiMailSend className='contact__option__icons'/>
              <h4>Email</h4>
              <h5>christoffelbothma@gmail.com</h5>
              <a href="mailto:christoffelbothma@gmail.com" target="_blank" rel="noreferrer">Send a email</a>
            </article>

            <article className="contact__option">
              <BsLinkedin className='contact__option__icons'/>
              <h4>LinkedIn</h4>
              <h5>Christo Bothma</h5>
              <a href="https://www.linkedin.com/in/christo-bothma-a47a96214" target="_blank" rel="noreferrer">Connect via LinkedIn</a>
            </article>

            <article className="contact__option">
              <IoLogoWhatsapp className='contact__option__icons'/>
              <h4>WhatsApp</h4>
              <h5>Christo Bothma</h5>
              <a href="https://api.whatsapp.com/send?phone=%2B27769909837&text&app_absent=0" target="_blank" rel="noreferrer">WhatsApp Me</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <input type='email' name='email' placeholder='Enter your email' required/>
            <textarea name='message' rows='7' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact