import React, { useState } from 'react';
import CapturePhoto from '../Components/CapturePhoto';
import SendPhoto from '../Components/SendPhoto';
import ShowFood from '../Components/ShowFood';

import './photoPage.css'

const PhotoPage = () => {
    const [photo, setPhoto] = useState(null);
    const [displayPhoto, setDisplayPhoto] = useState(null);
    const [nutritionalValue, setNutritionalValue] = useState([]);
    const [displayInfo, setDisplayInfo] = useState(false)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(file)
            setPhoto(file);
        }
    };

    return (
        <div className='photopage-container'>
            {!displayInfo && <input type="file" accept="image/*" onChange={handleFileChange} />}
            {!displayInfo && <CapturePhoto setPhoto={setPhoto} setDisplayPhoto={setDisplayPhoto}></CapturePhoto>}
            {!displayInfo && displayPhoto && <img className='image-display' src={displayPhoto} alt="Captured" />}
            {!displayInfo && <SendPhoto photo={photo} setNutritionalValue={setNutritionalValue} setDisplayInfo={setDisplayInfo}/>}
            {displayInfo && <ShowFood nutritionalValue={nutritionalValue} displayPhoto={displayPhoto} setDisplayInfo={setDisplayInfo} setDisplayPhoto={setDisplayPhoto}/>}
        </div>
    )
};

export default PhotoPage;