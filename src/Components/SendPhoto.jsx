

const sendPhoto = (photo) => {

    const send = () => {

        const formData = new FormData();
        formData.append('photo', photo);
        console.log("Photo is ", photo)
        console.log(formData)
        fetch('http://localhost:5000/api/process-image', {
            method: 'POST',
            body: formData,
            crossorigin: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json)
            .then((data) => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error processing image: ', error);
            })

    }
    return (
        <div>
            <button onClick={send}>Identify the image</button>
        </div>
    )
};

export default sendPhoto