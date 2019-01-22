import React from 'react'

function Contact(props){
  return(
    <div className='contact contact-cover'>
      <h1>Contact</h1>
      <a href='https://github.com/matthew-k-yee'><img className='icon' src={require('../files/github.png')} alt='github'/></a>
      <a href="mailto:matthew.k.yee@gmail.com?Subject=Hello%20Matthew" target="_top"><img className='icon' src={require('../files/mail.png')} alt='email'/></a>
      <a href='https://www.linkedin.com/in/matthew-k-yee/'><img className='icon' src={require('../files/linkedin.png')} alt='linkedin'/></a>
    </div>
  )
}
export default Contact
