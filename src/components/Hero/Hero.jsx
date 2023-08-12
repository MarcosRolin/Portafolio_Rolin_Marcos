import React from 'react'
import './Hero.css'

const Hero = () => {
return (

<div className='hero'>
  <div className='hero-content'>
    <h2 className='texto-global'> Mis Skills</h2>
  </div>
<div className='skills-conteiner'>
  <div className="icon-container html">
    <i className="fab fa-html5"></i>
    <p className='icon-text'>HTML</p>
  </div>
  <div className="icon-container css">
    <i className="fab fa-css3-alt"></i>
    <p className='icon-text'>CSS</p>
  </div>

  <div className="icon-container js">
    <i className="fab fa-js"></i>
    <p className='icon-text'>JavaScript</p>
  </div>
  
  <div class="icon-container node">
    <i class="fab fa-node-js"></i>
    <p className='icon-text'>Node.js</p>
  </div>

  <div class="icon-container react">
    <i class="fab fa-react"></i>
    <p className='icon-text'>React</p>
  </div>
  <div className="icon-container git">
    <i className="fab fa-github"></i>
    <p className='icon-text'>GitHub</p>
  </div>

  </div>
</div>
)
}

export {Hero}