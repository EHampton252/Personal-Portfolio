import { Slide } from 'react-slideshow-image';
import { Anakin, Jimmy, Horse, misspelled } from '../../assets';

export default function Slider() {
    const slideImages = [
        {
            url: {Anakin},
            caption: 'Slide 1'
        },
        {
            url: {Horse},
            caption: 'Slide 2'
        },
        {
            url: {misspelled},
            caption: 'Slide 3',
        },
        {
            url: {Jimmy},
            caption: 'Slide 4',
        }
    ];

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }      
    
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{...divStyle, 'backgroundImage': `url(${slideImage})`}}>
                            <span className="slide-image-style">{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}