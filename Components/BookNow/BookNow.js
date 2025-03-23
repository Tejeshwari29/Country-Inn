import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './BookNow.css';

const BookNow = () => {
    const navigate = useNavigate(); // Initialize navigate function

    // Static list of rooms
    const rooms = [
        { id: 1, name: 'Deluxe Room', price: 1000 },
        { id: 2, name: 'Suite Room', price: 500 },
        { id: 3, name: 'Standard Room', price: 250 },
        { id: 4, name: 'Premium', price: 500 },
        { id: 5, name: 'Executive', price: 500 },
        { id: 6, name: 'Economy', price: 500 },
        { id: 7, name: 'Luxury', price: 3000 },
    ];

    const [selectedRoom, setSelectedRoom] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [error, setError] = useState(null);

    // Handle room selection
    const handleRoomChange = (event) => {
        const roomId = event.target.value;
        const room = rooms.find(r => r.id === parseInt(roomId));

        setSelectedRoom(room);
        setTotalAmount(room ? room.price : '');
    };

    // Handle booking submission with Axios
    const handleBooking = async (e) => {
        e.preventDefault();

        if (!selectedRoom) {
            setError("Please select a room.");
            return;
        }

        const bookingData = {
            name,
            email,
            roomName: selectedRoom.name,
            totalAmount
        };

        try {
            const response = await axios.post('http://localhost:5262/api/booking/booking', bookingData);
            
            if (response.status === 200 || response.status === 201) {
                alert('Booking successful!');
                console.log("Booking confirmed:", response.data);

                // Reset form
                setName('');
                setEmail('');
                setSelectedRoom(null);
                setTotalAmount('');
                setError(null);

                // Redirect to home page
                navigate('/');
            } else {
                setError("Failed to complete booking. Please try again.");
            }
        } catch (err) {
            console.error("Error submitting booking:", err);
            setError("Failed to complete booking. Please try again.");
        }
    };

    return (
        <div className="book-now-container">
            <h2>Reserve Your Stay......</h2>

            {error && <p className="error">{error}</p>}

            {/* Booking Form */}
            <form onSubmit={handleBooking} className="booking-form">
                <label>Select Room:</label>
                <select onChange={handleRoomChange} required>
                    <option value="">-- Choose a Room --</option>
                    {rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                            {room.name} - ${room.price} per night
                        </option>
                    ))}
                </select>

                <label>Your Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Your Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Total Amount:</label>
                <input type="text" value={totalAmount} readOnly disabled />

                <button type="submit">Complete Booking</button>
            </form>
        </div>
    );
};

export default BookNow;
