import React, { useState } from 'react';
const Chatbot = () => {

    const [chat, setChat] = useState(null);

    let url = 'http://localhost:5000'
    fetch(`${url}`)
    .then((response) => response.text())
        .then((data) => {
            console.log(data)
            setChat(data)
        })
        .catch(error => {
            console.error('Error processing image: ', error);
        })

    return (
        <div>
            <div>{chat}</div>
        </div>
    )
}

export default Chatbot