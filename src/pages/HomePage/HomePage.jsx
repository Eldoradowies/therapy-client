import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles.css';

function HomePage() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const isLoggedIn = () => {
    const user = localStorage.getItem('user');
    return user !== null;
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/chat');
    }
  }, [navigate]);

  const toggleVideo = () => {
    const video = videoRef.current;
    const isPaused = video.paused;

    if (isPaused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
      <video autoPlay muted loop id="myVideo" ref={videoRef}>
        <source src={`${process.env.PUBLIC_URL}/video/home.mp4`} type="video/mp4" />
      </video>

    </div>
  );
}

export default HomePage;
