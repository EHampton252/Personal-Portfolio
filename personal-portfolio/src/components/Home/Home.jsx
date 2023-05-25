import Introduction from '../Introduction/Introduction.jsx'
import Stoic from '../APIs/Quotes/stoic.tsx'
import Quote from '../APIs/Quotes/general-quotes.tsx'
import RonSwonson from '../APIs/Quotes/ron.tsx'
import Bacon from '../APIs/Bacon/bacon.tsx'
// import PlayAudio from './button.tsx'
// import GoogleVoice from './APIs/Google-Voice/google-voice.tsx'
import '/src/Portfolio.css'
import './Home.css'
import {headshot, LinkedInIcon, GitIcon} from '../../assets/index.jsx'


export default function Home() {


    return (
        <>
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
            {/* <PlayAudio /> */}
            <div>{Introduction()}</div>
            <div className="container">
                <h2>Daily Wisdom</h2>
                <div className="quote"><Stoic /></div>
                <h3>General Quotes</h3>
                <div className="quote"><Quote /></div>
                <h3>Ron Swonson Wisdom</h3>
                <div className="quote"><RonSwonson /></div>
            </div>


            <iframe src="https://giphy.com/embed/11qCjC856PSmnm" width="480" height="327" className="giphy-embed" allowFullScreen></iframe>
                <p><a href="https://giphy.com/gifs/genius-albums-11qCjC856PSmnm" alt="flat-af" style={{ alignText: 'center' }}>via GIPHY</a></p>
            <div>

            <div className="bacon-box">
                <h2>Wise Words for Gains</h2>
                <p className="bacon-ipsum"><Bacon /></p>
            </div>

            </div>
            <p className="footer">
                There is nothing else exciting here, I promise. Go to the menu at the top of the page to see more.
            </p>
        </>
    )
}
// Space ship icon as a "return to top" button!!
// Responsive design
// Meme slideshow
// Polls?

// FOAAS when you try to close or error
// Ron Swonson quotes
// JokeAPI
// Personality test on big 5?



