import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id= 'education'>
      <h2>My Education</h2>

      <div className="container education">
        <div className="experience__work">
          <h3>School, Degree & Achievements</h3>
          <div className="education__content">
            <article className='education__details'>
            <div>
              <h4>2017 - 2021 : NWU (North-West University)</h4>
              <small className='text-light'>Obtained a Bachelors of Science in Information Technology Degree (BSc IT)
              </small>
            </div>
            </article>
          </div>

          <div className="education__content">
            <article className='education__details'>
            <div>
              <h4>2011 - 2016 : EHS (Ellisras High School)</h4>
              <small className='text-light'>
                Senior Matric Certificate (2 Distinctions).
                Head of academic student council.
                Academic colours for average above 75%.
                Sport colours for 3 years Cricket 1st team
              </small>
            </div>
            </article>
          </div>

          <div className="education__content">
            <article className='education__details'>
            <div>
              <h4>2004 - 2011 : Ellisras Primary School</h4>
              <small className='text-light'>
                Head boy: Grade 7
              </small>
            </div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Education