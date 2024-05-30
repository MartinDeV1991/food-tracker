import React, { useEffect, useState } from 'react';
import CapturePhoto from '../Components/CapturePhoto';
import SendPhoto from '../Components/SendPhoto';

import './photoPage.css'

const PhotoPage = () => {
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        let image = new Image();
        image.src = './test_image.png';

        image.onload = () => { // Wait for the image to load
            console.log("Image loaded");
            setPhoto(image); // Set the loaded image as the photo state
        };

        return () => {
            // Clean up event listener
            image.onload = null;
        };
    }, []); // Run once on mount

    return (
        <div className='photopage-container'>
            <CapturePhoto photo={photo} setPhoto={setPhoto}></CapturePhoto>
            {photo && <img className='image-display' src={photo} alt="Captured" />}
            <SendPhoto photo />
        </div>
    )
};

export default PhotoPage;