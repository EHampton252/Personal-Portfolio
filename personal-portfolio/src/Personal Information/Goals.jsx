//import { faSquare } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Goals() {
    return (
      <>
      <div className="container">
        <header className="goals-header">GOALS</header>
        <div className="card-goals">
          <p className="goals-r">My goals are:</p>
          <ul className="goals-list fa-ul">
            <li><span className="fa-li"><i className="fa-regular fa-square"></i></span>To be a learning sponge and soak up as must knowlege as possible</li>
            <li>To be prepared for a transition to a full-time salaried employee</li>
            <li>To be hired on at Neudesic post internship</li>
            <li>To be capable of building a full scale react project without help</li>
            <li>To be able to deploy a full scale React app</li>
            <li>To develop a stronger understanding of APIs</li>
          </ul>
         </div>
      </div>
      <iframe src="https://giphy.com/embed/XreQmk7ETCak0" width="480" height="360" className="goals giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/retro-thumbs-up-XreQmk7ETCak0">via GIPHY</a></p>
      </>
    )
  }

  // Empty squares for goals
  // Maybe a button function to add a goal/check-off a goal?