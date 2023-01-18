import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CGN Bothma</a>
      <h4 className='quote'>" TRY AND FAIL, BUT NEVER FAIL TO TRY "</h4>
      <ul className='navigation'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#moreAboutMe">More About Me</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer