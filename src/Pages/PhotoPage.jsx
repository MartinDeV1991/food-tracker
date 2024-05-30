import React, { useState } from 'react';
import CapturePhoto from '../Components/CapturePhoto';
import SendPhoto from '../Components/SendPhoto';

import './photoPage.css'

const PhotoPage = () => {
    const [photo, setPhoto] = useState(null);
    const [displayPhoto, setDisplayPhoto] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPhoto(file);
        }
    };

    return (
        <div className='photopage-container'>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <CapturePhoto setPhoto={setPhoto} setDisplayPhoto={setDisplayPhoto}></CapturePhoto>
            {displayPhoto && <img className='image-display' src={displayPhoto} alt="Captured" />}
            <SendPhoto photo={photo} />
        </div>
    )
};

export default PhotoPage;