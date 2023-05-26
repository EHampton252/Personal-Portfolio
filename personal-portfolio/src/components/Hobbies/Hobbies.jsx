//import Slider from '../components/Slideshow/meme-slider.jsx';]
import './Hobbies.css'
import ChessRating from '/src/components/APIs/Chess/chess.tsx'
import Bacon from '/src/components/APIs/Bacon/bacon.tsx'

export default function Hobbies() {
    return (
      <>
      <div className="container">
        <h2>HOBBIES</h2>
        <ul className="hobby-list">
          <li>Powerlifting</li>
          <li>Video Games</li>
          <li>Reading</li>
          <li>Playing Chess</li>
          <li><ChessRating /></li>
          <li>Coding my own side projects</li>
        </ul>
       </div>
       <iframe src="https://giphy.com/embed/WoWm8YzFQJg5i" width="480" height="351"  className="hobby giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/cartoons-comics-sea-reading-WoWm8YzFQJg5i">via GIPHY</a></p>
        <div className="bacon-box">
                <h2>Wise Words for Gains</h2>
                <p className="bacon-ipsum"><Bacon /></p>
        </div>
      </>
    )
  }
  // Chess API to display real-time stats
