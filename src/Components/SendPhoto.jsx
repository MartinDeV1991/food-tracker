

const sendPhoto = ({ photo }) => {

    const send = () => {

        const formData = new FormData();
        formData.append('photo', photo);
        console.log('photo: ', photo)
        fetch('https://food-tracker-backend.azurewebsites.net/api/process-image', {
            method: 'POST',
            body: formData,
            crossorigin: true,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("data: ", data)
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