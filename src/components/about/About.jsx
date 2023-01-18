import React from 'react'
import './about.css'
import ME from '../../assets/images/aboutMeNormal.jpeg'
import {BsFillAwardFill} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import {BiTask} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 Clients</small>
            </article>

            <article className='about__card'>
              <BiTask className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Projects</small><br></br>
              <small>(1 Web & 1 Mobile)</small>
            </article>
          </div>
          <p>
              I am a 25 year old IT graduate with 2 years of Application
              development experience seeking a position as a software
              developer in a high-level professional environment. My wish is to
              be employed at a reputable company, where I can make use of
              my hard working personality and skills to the best of my ability.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About