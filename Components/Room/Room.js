import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Room.css';  // Import CSS for styling
// Import images for different rooms
import roomImage1 from '../../Assests/Room1.avif';  
import roomImage2 from '../../Assests/image10.jpg';  
import roomImage3 from '../../Assests/image11.jpg';  
import roomImage4 from '../../Assests/image12.jpg';  
import roomImage5 from '../../Assests/image13.jpg';  
import roomImage6 from '../../Assests/image14.jpg';  
import roomImage7 from '../../Assests/image15.jpg';  

const Room = () => {
  const [showDetails, setShowDetails] = useState(null); // Track which room's details are visible

  // Sample data for rooms with different images and extra features
  const rooms = [
    {
      id: 1,
      name: 'Room1',
      type: 'Suite',
      price: 500,
      image: roomImage1,
      amenities: ['Air conditioning', 'Breakfast', 'TV', 'Mini-bar'],
      size: '50 m²',
      specialOffer: 'Book for 5 nights, get 1 free!',
      description: 'A beautiful suite with modern amenities including a king-sized bed and a balcony with stunning views.',
    },
    {
      id: 2,
      name: 'Room2',
      type: 'Deluxe',
      price: 1000,
      image: roomImage2,
      amenities: ['WiFi', 'Breakfast', 'TV', 'Balcony'],
      size: '40 m²',
      specialOffer: 'Exclusive for VIP members: 10% off!',
      description: 'A deluxe room with a comfy bed and all the amenities you need for a relaxing stay.',
    },
    {
      id: 3,
      name: 'Room3',
      type: 'Standard',
      price: 250,
      image: roomImage3,
      amenities: ['WiFi', 'Air conditioning', 'AC'],
      size: '30 m²',
      specialOffer: 'Limited time offer: Free breakfast included!',
      description: 'A cozy, affordable room with basic amenities and a comfortable stay.',
    },
    {
      id: 4,
      name: 'Room4',
      type: 'Premium',
      price: 1200,
      image: roomImage4,
      amenities: ['Air conditioning', 'Gym access', 'Mini-bar', 'TV'],
      size: '60 m²',
      specialOffer: 'Book for 3 nights, get 2 hours of spa treatment!',
      description: 'A premium room with luxurious facilities including a gym, jacuzzi, and more.',
    },
    {
      id: 5,
      name: 'Room5',
      type: 'Executive',
      price: 1500,
      image: roomImage5,
      amenities: ['WiFi', 'Private pool', 'TV', 'Ocean view'],
      size: '80 m²',
      specialOffer: 'Free airport shuttle service!',
      description: 'An executive room with panoramic ocean views and a private pool.',
    },
    {
      id: 6,
      name: 'Room6',
      type: 'Economy',
      price: 200,
      image: roomImage6,
      amenities: ['WiFi', 'Breakfast', 'Shared bathroom'],
      size: '25 m²',
      specialOffer: 'Stay 2 nights and get a free city tour!',
      description: 'An economy room with basic amenities perfect for budget travelers.',
    },
    {
      id: 7,
      name: 'Room7',
      type: 'Luxury',
      price: 3000,
      image: roomImage7,
      amenities: ['WiFi', 'Private Jacuzzi', 'Private terrace', 'Mini-bar'],
      size: '100 m²',
      specialOffer: 'Exclusive offer: Free personal butler service!',
      description: 'A luxury room with a private terrace and jacuzzi overlooking the city skyline.',
    },
  ];

  
  const toggleDetails = (id) => {
    setShowDetails(prevId => (prevId === id ? null : id)); // Toggle only one room at a time
  };
  
  return (
    
    <div className="room-container">
        <div className="best-rooms-header">
        <h1>Our Best Rooms</h1>
        <span className="arrow">&#8594;</span>
      </div>
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <div className="room-header">
            <h2>{room.name}</h2>
            <p>{room.type}</p>
            <p className="price">${room.price} per night</p>
            <p className="room-size">Size: {room.size}</p>
            <p className="special-offer">{room.specialOffer}</p>
          </div>

          {/* Room Image */}
          <div className="room-image">
            <img src={room.image} alt={room.name} />
          </div>

          {/* Toggle button for details */}
          <button className="details-toggle" onClick={() => toggleDetails(room.id)}>
            {showDetails === room.id ? 'Hide Details' : 'More Details'}
          </button>

          {/* Show room details if showDetails is true */}
          <div className={`room-details ${showDetails === room.id ? 'show' : ''}`}>
            <h3>Amenities:</h3>
            <ul>
              {room.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>

            <h3>Description:</h3>
            <p>{room.description}</p>

            {/* Book Now Button */}
            <Link to="/BookNow" className="book-now-link">
              <button className="book-now">Book Now</button>
            </Link>
          </div>
          
        </div>
      ))}

    </div>
  );
};

export default Room;
