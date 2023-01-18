import React from 'react'
import './moreAboutMe.css'
import ME from '../../assets/images/index.jpg'

const MoreAboutMe = () => {
  return (
    <section id= 'moreAboutMe'>
    <h5>Background</h5>
      <h2 className='primary__heading'>MoreAbout Me</h2>
      
      <div className="container more__about__container">
        <div className="more__about__me">
          <div className="more__about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="more__about__content">
        <h4 className='heading__about'>Background</h4>
          <p>
          I grew up on a game farm and absolutely loved
          every second of it. As I grew older, I was
          extremely intrigued with any form of technology.
          I was always considered as a "happy go lucky"
          boy and I gave my best at everything I set my
          mind to. I got accepted into The University Of
          Pretoria to study Agriculture after school. One
          day on the way back home from school, I told my
          mother that if only I could sit behind a computer
          for the rest of my life, I will be a happy man.
          Consequently I applied to study BsC IT and here I
          am today, loving every single moment of the
          Technological world.
          </p>

          <h4 className='heading__about'>Fun Facts</h4>
          <p>
          I Produced music for about 2 years (self taught).
          I Traveled to multiple countries.
          I have a YouTube and TikTok channel for gaming.
          I listen to music as often as possible.
          I Absolutely love KFC.
          I Grew up on a game farm and adore the outdoors.
          I live in Pretoria, pursuing IT as a career.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MoreAboutMe