import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin
import './content.css'; // Import CSS for styling and animations

import video1 from '../assets/Dualshock.mp4';
import video2 from '../assets/assets.mp4';
import video3 from '../assets/Hero.mp4';
import video4 from '../assets/Hero.mp4';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const videos = [
  { src: video1, text: 'Dual Sense - controller' },
  { src: video2, text: 'Next-Gen Performance' },
  { src: video3, text: 'Adaptive Triggers' },
  { src: video4, text: '3D Audio Technology' },
];

const Content = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // GSAP ScrollTrigger animation for videos
    gsap.utils.toArray('.video-section').forEach((video) => {
      gsap.fromTo(
        video,
        { opacity: 0, y: 100 }, // Initial state
        {
          opacity: 1,
          y: 0, // Move into place
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: video,
            start: 'top 70%', // Start when top of video is 70% in view
            end: 'bottom 10%', // End when bottom is 10% in view
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // GSAP ScrollTrigger animation for text content
    gsap.fromTo(
      '.text-content',
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0, // Final state
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text-content',
          start: 'top 80%', // Start when the text is 80% in view
          end: 'bottom 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Video switching logic
    const videoTimer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Switch video every 10 seconds

    return () => clearInterval(videoTimer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="content-container">
      <div className="content-wrapper">
        {/* Text Section */}
        <div className="text-content">
          <p className="text-title">Next-Level Innovation</p>
          <p className="text-description">
            Step into the world of unparalleled gaming with lightning-fast loading speeds, ultra-realistic graphics, and immersive audio technology.
          </p>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <div className="video-wrapper">
            <video
              key={currentVideoIndex} // Ensure re-render for autoplay
              className="feature-video"
              src={videos[currentVideoIndex].src}
              autoPlay
              muted
              disablePictureInPicture
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
