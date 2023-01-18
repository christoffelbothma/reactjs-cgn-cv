import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'
import ME from '../../assets/images/meTrans.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Christo Bothma</h1>
        <h5 className="text-light">Application Developer</h5>
        <CTA/>
        <Socials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>
          <>Scroll Down</>
        </a>
      </div>
    </header>
  )
}

export default Header