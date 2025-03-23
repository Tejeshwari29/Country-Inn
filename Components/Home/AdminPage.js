import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Adminpage.css';

const AdminDashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('jwt_token');
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || role !== 'admin') {
      navigate('/admin');
    } else {
      fetchRooms();
      fetchFoodItems();
    }
  }, []);

  // ✅ Fetch Booked Rooms
  const fetchRooms = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5262/api/booking/booked-rooms', {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Rooms Response:", response.data);

      if (Array.isArray(response.data)) {
        setRooms(response.data);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (err) {
      console.error("Error fetching rooms:", err);
      setError('Failed to load booked rooms.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch Food Items
  const fetchFoodItems = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5262/api/order', {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Food Response:", response.data);

      if (Array.isArray(response.data)) {
        setFoodItems(response.data);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (err) {
      console.error("Error fetching food items:", err);
      setError('Failed to load food items.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* ✅ Admin Details Section */}
      <div className="admin-details">
        <h3 style={{fontSize:'20px'}}>Admin Information</h3>
        <p><strong>Name:</strong> Tejeshwari GD</p>
        <p><strong>Email:</strong> tejeshwarigd@gmail.com</p>
        <p><strong>Role:</strong>  Admin</p>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSignOut} style={{backgroundColor:'orange'}}>Sign Out</button>

      <h3>Booked Rooms</h3>
      <button onClick={fetchRooms} style={{backgroundColor:'orange'}}>Refresh Rooms</button>
      {loading ? <p>Loading...</p> : rooms.length === 0 ? <p>No rooms found</p> :
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{backgroundColor:'#333'}}>Room Name</th>
              <th style={{backgroundColor:'#333'}}>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index}>
                <td>{room.roomName}</td>
                <td>${room.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }

      <h3>Manage Food Items</h3>
      <button onClick={fetchFoodItems} style={{backgroundColor:'orange'}}>Refresh Food Items</button>
      {loading ? <p>Loading...</p> : foodItems.length === 0 ? <p>No food items found</p> :
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{backgroundColor:'#333'}}>ID</th>
              <th style={{backgroundColor:'#333'}}>Name</th>
              <th style={{backgroundColor:'#333'}}>No of Plates</th>
              <th style={{backgroundColor:'#333'}}>Room Name</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((food) => (
              <tr key={food.id}>
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.noOfPlates}</td>
                <td>{food.roomName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default AdminDashboard;
