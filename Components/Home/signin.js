import React, { useState } from 'react';
import './signin.css';  // Import your CSS file for styling (optional)
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('user'); // State to store the selected role (user/admin)
  
  const navigate = useNavigate();  // Hook for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can enhance this)
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError(''); // Clear error message

    // Retrieve the registered users from localStorage (if any)
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Find the user in the registered users list
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password && user.role === role
    );

    // Check if a matching user was found
    if (!user) {
      console.log(`${role} signed in:`, { email, password });
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed in successfully!`);

      // Navigate to appropriate page based on role
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid credentials'); // Show error message if no match is found
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit} className="sign-in-form">
        {/* Role Selection (User or Admin) */}
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
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
        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>

      {/* Link to Sign Up page */}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

      {/* Link to Home page */}
      <li><Link to="/">Home</Link></li>
    </div>
  );
};

export default SignIn;
