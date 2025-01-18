import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gaming.css';

// Importing game videos
import video1 from '../assets/Spiderman.mp4';
import video2 from '../assets/Speedstorm.mp4';
import video3 from '../assets/BlackMyth.mp4';
import video4 from '../assets/FIFA.mp4';

gsap.registerPlugin(ScrollTrigger);

const Gaming = () => {
  const [currentVideoPairIndex, setCurrentVideoPairIndex] = useState(0);

  const games = [
    {
      video: video1,
      title: 'Spider Man',
    },
    {
      video: video2,
      title: 'Speedstorm',
    },
    {
      video: video3,
      title: 'Black Myth',
    },
    {
      video: video4,
      title: 'FIFA',
    },
  ];

  useEffect(() => {
    const videoTimer = setInterval(() => {
      setCurrentVideoPairIndex(
        (prevIndex) => (prevIndex + 2) % games.length
      ); // Increment by 2 to display the next pair
    }, 19000); // Switch videos every 19 seconds
    return () => clearInterval(videoTimer); // Cleanup timer on unmount
  }, [games.length]);

  useEffect(() => {
    // GSAP animations for header
    gsap.fromTo(
      '.headercon',
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.headercon',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    // GSAP animations for videos
    gsap.fromTo(
      '.video-card',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 2,
        stagger: 0.3,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.video-pair-container',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  const currentVideos = [
    games[currentVideoPairIndex],
    games[(currentVideoPairIndex + 1) % games.length],
  ];

  return (
    <div className="containercon">
      {/* Section Header */}
      <div className="headercon">
        <h1>Featured Games</h1>
        <p>Explore the latest and greatest in gaming!</p>
      </div>

      {/* Video Section */}
      <div className="video-pair-container">
        {currentVideos.map((game, index) => (
          <div key={index} className="video-card">
            <video
              className="game-video"
              src={game.video}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
            />
            <div className="game-info">
              <h3>{game.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;
