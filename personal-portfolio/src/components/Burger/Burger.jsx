import HamburgerMenu from "./Nav"

export default function Hamburger() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    
    return (
        <>
        <div>
            <HamburgerMenu />

            <div className="hamburger" onClick={toggleHamburger}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        </>
    )
}