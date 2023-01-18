import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {GrGithub} from 'react-icons/gr'

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://www.linkedin.com/in/christo-bothma-a47a96214" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href="https://api.whatsapp.com/send?phone=%2B27769909837&text&app_absent=0" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>
        <a href="https://github.com/cgnbothma?tab=repositories" target="_blank" rel="noreferrer"><GrGithub/></a>
    </div>
  )
}

export default Socials