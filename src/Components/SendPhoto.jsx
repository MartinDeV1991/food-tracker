import React from "react";


const SendPhoto = ({ photo, setNutritionalValue, setDisplayInfo }) => {

    const send = () => {
        let url = 'https://food-tracker-backend.azurewebsites.net'
        // let url = 'http://localhost:5000'
        const formData = new FormData();
        formData.append('photo', photo);
        console.log('photo: ', photo)
        fetch(`${url}/api/process-image`, {
            method: 'POST',
            body: formData,
            crossorigin: true,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("data: ", data)
                console.log(data.food_item[0].calories.per_item.calories)

                setNutritionalValue(data)
                setDisplayInfo(true)
            })
            .catch(error => {
                console.error('Error processing image: ', error);
            })

    }
    return (
        <div>
            <button className='buttons-style' onClick={send}>Identify the image</button>
        </div>
    )
};

export default SendPhoto