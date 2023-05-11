import { useState } from 'react'
import Goals from './Goals.jsx'
import Hobbies from './Hobbies.jsx'
import Introduction from './Introduction.jsx'
//import './public/description.txt'
import './Home.css'

export default function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Ethan&aposs Personal Portfolio</title>
      <h1>Ethan Hampton</h1>
      <h2>Software Intern @ Neudesic</h2>
      <h3>MIS Student @ THE Ohio State University</h3>
      <h4>Introduction: {Introduction()}</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <h5>{Goals()}</h5>
      <h5>{Hobbies()}</h5>
      </div>
      <p className="read-the-docs">
        This is a test
      </p>
    </>
  )
}

// function to display memes

// Maybe a function to add a fun or cool meme button??
// Maybe change button to a poll of some sort?


//export default Portfolio
