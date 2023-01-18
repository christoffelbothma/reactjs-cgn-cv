import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id= 'experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>JSON</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Novice</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Novice</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Novice</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>Mobile Dev</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        <div className="experience__tools&more">
        <h3>Tools & More Skills</h3>
          <div className="experience__content">

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>Git</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>Azure DevOps</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>SQL (Microsoft SQL) </h4>
              <small className='text-light'>Novice</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>LENS kubernetes</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>DevExpress Reporting</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillBookmarkCheckFill className='experience-icons'/>
            <div>
              <h4>JIRA & Confluence</h4>
              <small className='text-light'>Expert</small>
            </div>
            </article>

          </div>
        </div>
      </div>
      
      <div className="container work__experience">
        <div className="experience__work">
          <h3>Work Experience</h3>
          <div className="workexperience__content">
            <article className='workexperience__details'>
            <div>
              <h4>2021 - Present : Junior Frontend Developer - Intenda(Pty) Ltd</h4>
              <small className='text-light'>I worked between 8 and 14 months respectively on mobile and front end projects as a frontend developer. 
              I worked on a Platform called 'Opus' in JSON which is a DSL(Domain Specific Language) written in ReactJS. I learned so much about
              working in a team (agile development methodologies) and how to deliver projects in a given time to the best of my ability.
              </small>
            </div>
            </article>
          </div>

          <div className="workexperience__content">
            <article className='workexperience__details'>
            <div>
              <h4>2015 - 2020 : Tech Support - Cheetah Safaris Game Lodge</h4>
              <small className='text-light'>
                I did freelance working during the holidays.
                Assisted with USA and SA hunters and tourists.
                Video recording.
                I Helped with the company's Website development(WordPress).
                Social media marketing.
                Game capturing, breeding and conservation.
                Wireless Camera maintenance.
              </small>
            </div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default experience