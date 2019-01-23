import React from 'react'
// import File from '/public/resources/matthew-k-yee.pdf'
// import Pdf from "../files/resume.pdf"


function AboutMe(props){
  return(
    <div className='aboutme white-cover'>
      <h1>About Me</h1>
      <p>"Simplicity is about subtracting the obvious and adding the meaningful."<cite> -John Maeda</cite></p>
      <p>I am a full stack developer. Excited to use and further develop my technical skills in collaborative and cohesive environments. Adept at creating responsive Full-Stack CRUD websites from concept to design to deployment. I enjoy working with dynamic team members and contributing to innovative projects. </p>
      {/* <a className='resume' href={Pdf}>View My Resume</a> */}
    </div>
  )
}
export default AboutMe
