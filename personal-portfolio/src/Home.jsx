//import { useState } from 'react'
import Goals from './Personal Information/Goals.jsx'
import Hobbies from './Personal Information/Hobbies.jsx'
import Introduction from './Personal Information/Introduction.jsx'
//import './public/description.txt'
import './Home.css'
import {headshot, LinkedInIcon, GitIcon} from './assets/index.jsx'

export default function Portfolio() {

  return (
    <>
      <title>Ethans Personal Portfolio</title>
      <header>
        <ul className="nav-bar">
          <li><a href="">Home</a></li>
          <li><a href="">Goals</a></li>
          <li><a href="">Hobbies</a></li>
        </ul>
      </header>
      <img src = {headshot} className="profile"/>
      <div className="headline">
        <h1 className="name">Ethan Hampton</h1>
        <h2 className="position">Software Intern @ Neudesic</h2>
        <h3 className="degree">MIS Student @ THE Ohio State University</h3>
      </div>
      <div className="socials">
        <a href="https://github.com/EHampton252">
          <img src={GitIcon} alt="git-icon" width="48" height="43"/>
        </a>
        <a href="https://www.linkedin.com/in/ethan-hampton-eth/">
          <img src={LinkedInIcon} alt="linkedin-icon" width="50" height="43" />
        </a>
      </div>
      <div>{Introduction()}</div>
      <div>{Goals()}</div>
      <div>{Hobbies()}</div>
      <iframe src="https://giphy.com/embed/11qCjC856PSmnm" width="480" height="327" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/genius-albums-11qCjC856PSmnm">via GIPHY</a></p>
      <p className="footer">
        There is nothing exciting here, I promise.
      </p>
    </>
  )
}

// function to display memes

// Maybe a function to add a fun or cool meme button??
// Maybe change button to a poll of some sort?


//export default Portfolio
