import { useState } from 'react'
import Goals from './Personal Information/Goals.jsx'
import Hobbies from './Personal Information/Hobbies.jsx'
import Introduction from './Personal Information/Introduction.jsx'
//import './public/description.txt'
import './Home.css'
import './profile.jpeg'

export default function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Ethans Personal Portfolio</title>
      <header>
        Home
      </header>
      <img src = "profile.jpeg" className="profile"/>
      <h1>Ethan Hampton</h1>
      <h2>Software Intern @ Neudesic</h2>
      <h3>MIS Student @ THE Ohio State University</h3>
      <div>{Introduction()}</div>
      <div>{Goals()}</div>
      <div>{Hobbies()}</div>
      <iframe src="https://giphy.com/embed/11qCjC856PSmnm" width="480" height="327" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/genius-albums-11qCjC856PSmnm">via GIPHY</a></p>
      <p className="footer">
        There's nothing exciting here, I promise.
      </p>
    </>
  )
}

// function to display memes

// Maybe a function to add a fun or cool meme button??
// Maybe change button to a poll of some sort?


//export default Portfolio
