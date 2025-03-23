import React from 'react';
import Room from './Room'; // Import the Room component

const RoomList = () => {
  const rooms = [
    {
      id: 1,
      name: 'Luxury Suite',
      type: 'Suite',
      price: 250,
      image: 'path_to_image_1.jpg',  // Provide an image URL for the room
      amenities: ['King-sized bed', 'Ocean view', 'Private balcony', 'Free WiFi'],
      description: 'A luxurious suite with a beautiful view of the ocean, offering the best in comfort and style.',
    },
    {
      id: 2,
      name: 'Standard Room',
      type: 'Standard',
      price: 120,
      image: 'path_to_image_2.jpg',  // Provide an image URL for the room
      amenities: ['Queen-sized bed', 'City view', 'Free WiFi'],
      description: 'A comfortable and affordable room with all the essential amenities for a pleasant stay.',
    },
    {
      id: 3,
      name: 'Deluxe Room',
      type: 'Deluxe',
      price: 180,
      image: 'path_to_image_3.jpg',  // Provide an image URL for the room
      amenities: ['Double bed', 'Mountain view', 'Air conditioning', 'Free WiFi'],
      description: 'Our Deluxe Room offers spacious living with beautiful mountain views, designed for ultimate relaxation.',
    },
    // Add more rooms as needed
  ];

  return (
    <div className="room-list-container">
      <h1>Our Rooms</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
