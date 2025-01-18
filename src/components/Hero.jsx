import { useEffect } from 'react';
import { gsap } from 'gsap';
import './Hero.css'; // Import CSS for styling and animations
import video from '../assets/Hero.mp4';

const Hero = () => {
  useEffect(() => {
    const videoElement = document.querySelector('.hero-video');
    const navBar = document.querySelector('.navbar');

    videoElement.addEventListener('ended', () => {
      // Animate text, button, and navbar appearance
      const tl = gsap.timeline();
      tl.
      to(navBar, { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'back.out(1.7)' 
      }, "-=0.5")
      .to('.line', { 
        opacity: 1,
        scaleY: 3, 
        duration: 1, // Duration for stretching
        // transformOrigin: 'center top', 
        // ease: 'power4.inOut' 
      })
      .to('.line', { 
        x: 0, // Return to starting position
        rotation: 0, // Reset rotation
        scaleY: 1, // Reset vertical stretch
        scaleX: 1, // Reset horizontal scale
        duration: 1, // Reset duration
        ease: 'power2.inOut' // Smooth and natural motion
      })      
      .to('.hero-text', { 
        opacity: 1, 
        y: 0, 
        duration: 1 
      })
      .to('.buy-now-btn', { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: 'back.out(1.7)' 
      }, "-=0.5") // Overlap animation by 0.5 seconds
    });
  }, []);

  return (
    <div className="hero-container">
      {/* Video Background */}
      <video
        className="hero-video"
        src={video}
        autoPlay
        muted
        disablePictureInPicture
      ></video>

      {/* Navigation Bar */}
      <div className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Text about the PS5 */}
      <div className="hero-text">
        The Ultimate Gaming Experience: PS5
      </div>

      <div className='line'>

      </div>

      {/* Buy Now Button */}
      <a href='/Product'>
        <button className="buy-now-btn">
          Buy Now
        </button>
      </a>

    </div>
  );
};

export default Hero;
