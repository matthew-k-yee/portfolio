import React from 'react'

function Projects(props){
  return(
    <div className='projects white-cover'>
      <h1>Projects</h1>
      <div className='projectsList'>
        <div>
          <h2>Novels</h2>
          <h5>React.js, Ruby on Rails, PostgreSQL</h5>
          <a href="https://pure-crag-54635.herokuapp.com/"><img className='project-image' src={require('../files/novels.png')} alt='novels'/></a>
          <a className='github-link' href='https://github.com/matthew-k-yee/novels'>Repo</a>
        </div>
        <div>
          <h2>SneakerCritic</h2>
          <h5>React.js, Express.js, PostgreSQL</h5>
          <a href="https://pleasant-slip.surge.sh/"><img className='project-image' src={require('../files/sneakercritic.png')} alt='sneakercritic'/></a>
          <a className='github-link' href='https://github.com/matthew-k-yee/sneakercritic'>Repo</a>
        </div>
        <div>
          <h2>Flip Drip Skip</h2>
          <h5>JavaScript, HTML</h5>
          <a href="https://tacit-north.surge.sh/"><img className='project-image' src={require('../files/flip.png')} alt='game'/></a>
          <a className='github-link' href='https://github.com/matthew-k-yee/project1'>Repo</a>
        </div>
      </div>
    </div>
  )
}
export default Projects
