// src/Components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import image4 from '../../Assests/image4.jpg';  // Import images
import image3 from '../../Assests/image3.jpg';
import image5 from '../../Assests/image5.webp'; // Import image5

import Footer from '../Footer/Footer'; // Import Footer component
import './Home.css';  // Import custom styles

const Home = () => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const images = [image4, image3, image5];  // Now includes three images

  // Effect to change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  // Loop through images
    }, 3000);  // Change image every 3 seconds

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, []);  // Empty dependency array to run only once

  return (
    <div className="home-page">
      <h1>Welcome to the Country-<span style={{color:'orange'}}>Inn :)</span></h1>
      <p>We offer the best rooms and delicious foods for your comfort!</p>
      <p>call now</p>
      <p>8296712972</p>


      {/* Sign In and Sign Up Buttons on Image */}
      <div className="auth-buttons" style={{borderRadius:'400px'}}>
        {/* Use Link to navigate to SignIn and SignUp pages */}
        <Link to="/signin">
          <button className="auth-btn sign-in" style={{borderRadius:'300px'}}>Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="auth-btn sign-up" style={{borderRadius:'300px'}}>Sign Up</button>
        </Link>
      </div>

      {/* Display the current image */}
      <img 
        src={images[currentIndex]} 
        alt={`Hotel room ${currentIndex + 1}`} 
        className="image-slider"
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
