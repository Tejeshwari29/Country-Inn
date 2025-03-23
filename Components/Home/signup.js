// src/Components/SignUp/SignUp.js
import React, { useState } from 'react';
import './signup.css';  // Optional: Import your CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import Axios for API calls

const SignUp = () => {
  const [name, setName] = useState('');  // ✅ Fix: Add name state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setLoading(true);

    // Prepare sign-up request data
    const signUpData = {
      name,
      email,
      password,
    };

    try {
      // ✅ Fix: Adjust API endpoint
      const response = await axios.post('http://localhost:5262/api/signup/signup', signUpData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200 || response.status === 201) {  // ✅ Fix: Handle both 200 & 201
        console.log('✅ User signed up successfully:', response.data);
        alert('Sign up successful!');
        window.location.href = '/signin'; // Redirect after signup
      }
    } catch (err) {
      console.error('❌ Error during sign up:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit} className="sign-up-form">
        {/* Name Input ✅ Fix: Add Name field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>

      {/* Link to Sign In page */}
      <p>Already have an account? <a href="/signin">Sign In</a></p>
      <li><Link to="/"> Home</Link></li>  
    </div>
  );
};

export default SignUp;
