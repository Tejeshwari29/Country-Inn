import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, message };

        
        
    try {
      const response = await axios.post('http://localhost:5262/api/contact', formData);
      console.log('✅ Contact saved successfully:', response.data);
      alert('Contact saved successfully!');
  } catch (err) {
      console.error('❌ Error placing order:', err.response ? err.response.data : err.message);
      alert(`Failed to place order: ${err.response?.data?.message || err.message}`);
  }
    };

    return (
        <div className="contactSection">
            <h2 style={{color:'#333'}}>Contact Us</h2>
            <p>Have questions? Feel free to reach out to us anytime!</p>

            {/* Contact Information Section */}
            <div className="contactInfo">
                <div className="infoItem">
                    <i className="fas fa-phone-alt"></i>
                    <p>Phone: 8296712972</p>
                </div>
                <div className="infoItem">
                    <i className="fas fa-envelope"></i>
                    <p>Email: tejeshwarigd@gmail.com</p>
                </div>
                <div className="infoItem">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Location: Anjaneya Badavane 18th cross,Davanagere-577004,Karnataka,India</p>
                </div>
            </div>

            {/* Embedded Map */}
            <div className="mapContainer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.142928924033!2d75.89705261430442!3d14.464627289912816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba1f72a5d533f%3A0x3bc749d2331a6bde!2sDavanagere%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1697469245682!5m2!1sen!2sin"
        title="Davanagere Location Map"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="contactForm">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit" style={{backgroundColor:'orange'}}>Send Message</button>
            </form>

            {/* Success or Error Message */}
            {success && <div className="successMessage">Message sent successfully!</div>}
            {error && <div className="errorMessage">{error}</div>}

            {/* Social Media Links */}
            <div className="socialLinks">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

            
        </div>
    );
};

export default Contact;
