// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure you are using Routes, not Route in the latest versions
import './App.css';
import Home from './Components/Home/Home'; // Import Home component
import About from './Components/About/About'; // Import About component
import NAvbar from './Components/Navbar/NAvbar';
import SignIn from './Components/Home/signin';  // Corrected to match lowercase file name
import SignUp from './Components/Home/signup';  // Corrected to match lowercase file name
import Room from './Components/Room/Room';  // Import Room component
import BookNow from './Components/BookNow/BookNow';
import Food from './Components/Food/Food';
import Contact from './Components/Contact/Contact';
 import AdminPage from './Components/Home/AdminPage';
function App() {
  return (
    <Router>
      <div className="App">
        <NAvbar/>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Route to Home page */}
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/room" element={<Room />} /> 
          <Route path="/booknow" element={<BookNow />} /> 
          <Route path="/food" element={<Food />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* Route to Room page */}
          {/* Route to Room page */}
          {/* Route to Room page */}
          {/* Route to Room page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
