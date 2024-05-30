import React, { useRef } from 'react';

const CapturePhoto = ({ setPhoto }) => {

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
          setPhoto(canvasRef.current.toDataURL('image/png'));
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

  return (
    <div className="photocapture-container">
      <h1>Capture Photo</h1>
      <button id="captureButton" onClick={handleCapture}>Capture Photo</button>
      <video className='video-display' ref={videoRef} autoPlay ></video>
      <canvas className='canvas-display' ref={canvasRef} ></canvas>
    </div>
  );
};

export default CapturePhoto;