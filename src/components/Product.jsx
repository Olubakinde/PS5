import { useState, useEffect } from 'react';
import './Product.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ps5Console from '../assets/PS5.png';
import ps5Controller from '../assets/controller.png';
import ps5Headset from '../assets/headset.png';
import ps5Game from '../assets/forbiddenwest.png';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const products = [
    {
      name: 'PlayStation 5 Console',
      description: 'Experience lightning-fast loading with an ultra-high-speed SSD and immersive gameplay.',
      image: ps5Console,
      price: '$499',
    },
    {
      name: 'DualSense Wireless Controller',
      description: 'Feel the action with haptic feedback and adaptive triggers.',
      image: ps5Controller,
      price: '$69',
    },
    {
      name: 'Pulse 3D Wireless Headset',
      description: 'Enjoy 3D audio and crystal-clear voice capture.',
      image: ps5Headset,
      price: '$99',
    },
    {
      name: 'PS5 Game: Horizon Forbidden West',
      description: 'Explore stunning open-world gameplay with Aloy in her next adventure.',
      image: ps5Game,
      price: '$59',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // GSAP ScrollTrigger for product section
    gsap.fromTo(
      '.product-section',
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
          trigger: '.product-section',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  const handleNext = () => {
    const tl = gsap.timeline();
    tl.to('.product-card', { x: -300, opacity: 0, duration: 0.5 })
      .add(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length))
      .fromTo('.product-card', { x: 300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
  };

  const handlePrev = () => {
    const tl = gsap.timeline();
    tl.to('.product-card', { x: 300, opacity: 0, duration: 0.5 })
      .add(() =>
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? products.length - 1 : prevIndex - 1
        )
      )
      .fromTo('.product-card', { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
  };

  return (
    <div className="product-section">
      <div className="background-half black">
        <div className="product-container">
          <div className="product-card">
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="product-image"
            />
            <h3 className="product-name">{products[currentIndex].name}</h3>
            <p className="product-description">{products[currentIndex].description}</p>
            <p className="product-price">{products[currentIndex].price}</p>
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePrev} className="nav-button">Previous</button>
          </div>
        </div>
      </div>
      <div className="background-half white">
        <div className="product-container">
          <div className="product-card">
            <img
              src={products[(currentIndex + 1) % products.length].image}
              alt={products[(currentIndex + 1) % products.length].name}
              className="product-image"
            />
            <h3 className="product-name">{products[(currentIndex + 1) % products.length].name}</h3>
            <p className="product-description">{products[(currentIndex + 1) % products.length].description}</p>
            <p className="product-price">{products[(currentIndex + 1) % products.length].price}</p>
          </div>
          <div className="navigation-buttons">
            <button onClick={handleNext} className="nav-button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
