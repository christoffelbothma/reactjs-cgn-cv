import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go';
import {FaInfoCircle} from 'react-icons/fa';
import {FaGraduationCap} from 'react-icons/fa';
import {GiNetworkBars} from 'react-icons/gi';
import {SiAboutdotme} from 'react-icons/si';
import {SlCallEnd} from 'react-icons/sl';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaInfoCircle/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaGraduationCap/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><GiNetworkBars/></a>
      <a href="#moreAboutMe" onClick={() => setActiveNav('#moreAboutMe')} className= {activeNav === '#moreAboutMe' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><SlCallEnd/></a>
    </nav>
  )
}

export default Nav