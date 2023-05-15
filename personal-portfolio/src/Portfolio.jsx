//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Goals from './Personal Information/Goals.jsx'
import Hobbies from './Personal Information/Hobbies.jsx'
import Home from './Home.jsx'

export default function Portfolio() {

  return (
    <>
      <Router>
        <nav>
          <ul className="nav-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/goals">Goals</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/goals" element={<Goals/>}/>
          <Route path="/hobbies" element={<Hobbies/>}/>
        </Routes>
      </Router>
    </>
  )
}

// function to display memes

// Maybe a function to add a fun or cool meme button??
// Maybe change button to a poll of some sort?


//export default Portfolio
