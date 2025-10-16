import { useState } from 'react'
import wallpaper01 from '../assets/wallpaper01.jpg'
import wallpaper02 from '../assets/wallpaper02.jpg'
import wallpaper03 from '../assets/wallpaper03.jpg'
import wallpaper04 from '../assets/wallpaper04.jpg'
import wallpaper05 from '../assets/wallpaper05.jpg'

const CarouselWalpaper = () => {

    const [wallpapers, setWallpapers] = useState([
        wallpaper01,
        wallpaper02,
        wallpaper03,
        wallpaper04,
        wallpaper05
    ])

    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (currentImage == wallpapers.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1)
        }
    }
    const handlePrev = () => {
        if (currentImage == 0) {
            setCurrentImage(wallpapers.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    return (
        <div>
            <h1>All Wallpaper changes Using next,prev button</h1>
            <button type="button" onClick={handlePrev}>Prev</button>
            <div>
                <img src={wallpapers[currentImage]} alt="" width="400px" />
            </div>
            <button type="button" onClick={handleNext}>Next</button>
        </div>
    )
}

export default CarouselWalpaper