// src/Components/About/About.js
import React from 'react';
import './About.css'; // Import the CSS for styling
// Import images for decoration
import image1 from '../../Assests/image6.jpg'; // Replace with your image path
import image2 from '../../Assests/image2.jpg'; // Replace with your image path
import image3 from '../../Assests/image16.jpg'; // Replace with your image path
import image4 from '../../Assests/image17.jpg'; // Replace with your image path
import image5 from '../../Assests/image18.jpg'; // Replace with your image path
import image6 from '../../Assests/ima19.avif'; // Replace with your image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 style={{ color: 'white' }}>Welcome to Our Luxury Country- <span style={{color:'orange'}}>Inn :)</span></h1>
        <p>Your perfect getaway destination with world-class services and amenities.</p>
        <p>
          Our luxury hotel offers a unique experience for all guests. Whether you are here for a vacation, business trip, or a special event, we ensure that your stay is memorable.
          Located in the heart of nature, our hotel provides exceptional services, luxury rooms, and a variety of recreational activities.
        </p>
      </div>

      <div className="about-content">
        <section className="about-main">
          {/* Facilities Section */}
          <section className="facilities">
            <h2>Our Facilities</h2>
            <div className="facility-list">
              <div className="facility-item">
                <h3>Food & Dining</h3>
                <p>Enjoy exquisite cuisine at our in-house restaurant, offering local and international dishes prepared by top chefs.</p>
              </div>
              <div className="facility-item">
                <h3>Rooms & Suites</h3>
                <p>Relax in our well-appointed rooms, equipped with modern amenities to ensure a comfortable stay.</p>
              </div>
              <div className="facility-item">
                <h3>Swimming Pool</h3>
                <p>Take a dip in our outdoor swimming pool, the perfect place to unwind and enjoy the beautiful weather.</p>
              </div>
              <div className="facility-item">
                <h3>Games & Entertainment</h3>
                <p>We offer a wide range of games and entertainment options, including board games, video games, and more.</p>
              </div>
              <div className="facility-item">
                <h3>Horse Riding</h3>
                <p>For horse lovers, we provide guided horse riding sessions in our picturesque surroundings.</p>
              </div>
              <div className="facility-item">
                <h3>Park & Outdoor</h3>
                <p>Explore our beautiful park with walking trails, picnic spots, and plenty of space to relax in nature.</p>
              </div>
            </div>
          </section>

          {/* Image Section beside the information */}
          <div className="image-section">
            <img className="about-image" src={image1} alt="Hotel 1" />
            <img className="about-image" src={image2} alt="Hotel 2" />
            <img className="about-image" src={image3} alt="Hotel 3" />
            <img className="about-image" src={image4} alt="Hotel 4" />
            <img className="about-image" src={image5} alt="Hotel 5" />
            <img className="about-image" src={image6} alt="Hotel 6" />
          </div>
        </section>
      </div>

      <div className="about-footer">
        <p style={{ color: 'white' }}>Looking forward to welcoming you to our hotel for an unforgettable experience!.......</p>
      </div>

    </div>
  );
};

export default About;
