import React from 'react'
import { Link } from 'react-router-dom';

function Nav(props){
  return(
    <div className='container brackets'>
      <Link to='/'>Home</Link>
      <Link to='/aboutme'>About Me</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}
export default Nav
