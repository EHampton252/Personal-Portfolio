//import { faSquare } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Goals.css'

export default function Goals() { // Change header to h2 and simplify CSS classNames
    return (
      <>
        <h2>GOALS</h2>
          <h3 className="goals-r">My goals are:</h3>
          <ul className="goals-list grid-container">
            <li><span className="fa-li"><i className="fa-regular fa-square"></i></span>To be a learning sponge and soak up as must knowlege as possible</li>
            <li>To be prepared for a transition to a full-time salaried employee</li>
            <li>To be hired on at Neudesic post internship</li>
            <li>To be capable of building a full scale react project without help</li>
            <li>To be able to deploy a full scale React app</li>
            <li>To develop a stronger understanding of APIs</li>
          </ul>
      <iframe src="https://giphy.com/embed/XreQmk7ETCak0" width="480" height="360" className="goals giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/retro-thumbs-up-XreQmk7ETCak0">via GIPHY</a></p>
      </>
    )
  }

  // Break out CSS main file into smaller files
  // Empty squares for goals
  // Maybe a button function to add a goal/check-off a goal?