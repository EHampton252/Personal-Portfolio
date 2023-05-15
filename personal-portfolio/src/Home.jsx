import Introduction from './Personal Information/Introduction.jsx'
import './Portfolio.css'
import {headshot, LinkedInIcon, GitIcon} from './assets/index.jsx'

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
            <div>{Introduction()}</div>
            <iframe src="https://giphy.com/embed/11qCjC856PSmnm" width="480" height="327" className="giphy-embed" allowFullScreen></iframe>
                <p><a href="https://giphy.com/gifs/genius-albums-11qCjC856PSmnm" alt="fire-elmo-gif" style={{ alignText: 'center' }}>via GIPHY</a></p>
            <p className="footer">
                There is nothing else exciting here, I promise. Go to the menu at the top of the page to see more.
            </p>
        </>
    )
}
// Meme slideshow
// Polls?
// Daily Quotes?
// 