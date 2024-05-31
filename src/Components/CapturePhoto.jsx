import React, { useRef } from 'react';

const CapturePhoto = ({ setPhoto, setDisplayPhoto }) => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCapture = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.style.display = 'block';
        document.getElementById('captureButton').textContent = 'Take Photo';

        document.getElementById('captureButton').onclick = () => {
          const context = canvasRef.current.getContext('2d');
          canvasRef.current.width = videoRef.current.videoWidth;
          canvasRef.current.height = videoRef.current.videoHeight;
          context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
          const file = dataURLToFile(canvasRef.current.toDataURL('image/png'), 'captured_photo.jpg');
          setPhoto(file);
          setDisplayPhoto(canvasRef.current.toDataURL('image/png'))
          videoRef.current.style.display = 'none';
          document.getElementById('captureButton').textContent = 'Capture Photo';
          stream.getTracks().forEach(track => track.stop());
        };
      } catch (err) {
        console.error('An error occurred: ' + err);
      }
    } else {
      alert('getUserMedia not supported on your browser!');
    }
  };

  const dataURLToFile = (dataURL, filename) => {
    // Convert data URL to Blob
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: mimeString });

    // Create File from Blob
    const file = new File([blob], filename, { type: mimeString });

    return file;
  };

  // Usage:



  return (
    <div className="photocapture-container">
      <h1>Capture Photo</h1>
      <button className='buttons-style' id="captureButton" onClick={handleCapture}>Capture Photo</button>
      <video className='video-display' ref={videoRef} autoPlay ></video>
      <canvas className='canvas-display' ref={canvasRef} ></canvas>
    </div>
  );
};

export default CapturePhoto;