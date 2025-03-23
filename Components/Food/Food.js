import React, { useState } from 'react';
import axios from 'axios';  // Make sure to import axios
import './Food.css';
import roomImage1 from '../../Assests/idli.jpg';
import roomImage2 from '../../Assests/dose.jpg';
import roomImage3 from '../../Assests/Paddu.webp';
import roomImage4 from '../../Assests/cocunutrice.jpeg';
import roomImage5 from '../../Assests/pudina rice.jpg';
import roomImage6 from '../../Assests/puri.jpg';
import roomImage7 from '../../Assests/tea.webp';
import roomImage8 from '../../Assests/Coffee.jpg';
import roomImage9 from '../../Assests/chapathi.jpg';
import roomImage10 from '../../Assests/roti.jpg';
import roomImage11 from '../../Assests/Annasambar.jpeg';
import roomImage from '../../Assests/chapathi.jpg';
import roomImag from '../../Assests/roti.jpg';
import roomIma from '../../Assests/Annasambar.jpeg';
import roomImage12 from '../../Assests/tea.webp';
import roomImage13 from '../../Assests/Coffee.jpg';

const Food = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [quantity, setQuantity] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(null);  // To store order success message

  // This state will store user name and room name for each food item
  const [userDetails, setUserDetails] = useState({
    breakfast: {},
    lunch: {},
    dinner: {},
    snacks: {}
  });

  const foodItems = {
    breakfast: [
      { id: 1, name: 'Idli', image: roomImage1, description: 'Steamed rice cakes served with coconut chutney and sambar. A popular South Indian breakfast option.', price: '$50' },
      { id: 2, name: 'Dosa', image: roomImage2, description: 'Crispy, golden South Indian crepe made from fermented rice and lentil batter, served with chutney and sambar.', price: '$70' },
      { id: 3, name: 'Paddu', image: roomImage3, description: 'A South Indian snack made from fermented rice and lentil batter, shaped into small, round, crispy bites, served with chutney and sambar.', price: '$50' },
      { id: 4, name: 'Coconut Rice', image: roomImage4, description: 'Fragrant rice cooked with fresh grated coconut, tempered with mustard seeds, curry leaves, and mild spices, perfect for breakfast or a light meal.', price: '$50' },
      { id: 5, name: 'Pudina Rice', image: roomImage5, description: 'A fragrant rice dish made with fresh mint leaves (pudina), spices, and tempered ingredients, offering a refreshing taste with every bite.', price: '$50' },
      { id: 6, name: 'Puri', image: roomImage6, description: 'Fluffy deep-fried bread served with potato masala or curry. A delicious and indulgent breakfast or snack option.', price: '$50' },
      { id: 7, name: 'Tea', image: roomImage7, description: 'A refreshing cup of Indian chai made with black tea, milk, and a blend of aromatic spices, served hot for the perfect start to your day.', price: '$20' },
      { id: 8, name: 'Coffee', image: roomImage8, description: 'Rich and aromatic South Indian filter coffee made with freshly brewed coffee decoction, milk, and sugar, creating a creamy and robust flavor.', price: '$20' },
    ],
    lunch: [
      { id: 1, name: 'Chapathi', image: roomImage9, description: 'Soft and slightly chewy flatbread made from whole wheat flour, often served with curry or vegetable dishes as a part of a traditional Indian meal.', price: '$100' },
      { id: 2, name: 'Roti', image: roomImage10, description: 'A staple in Indian cuisine, roti is a round, unleavened flatbread made from whole wheat flour, commonly served with dals (lentils) or curries.', price: '$100' },
      { id: 3, name: 'Annasambar', image: roomImage11, description: 'A tangy, spicy South Indian lentil soup made with rice and vegetables, served with sambar, a flavorful tamarind-based curry.', price: '$100' },
    ],
    dinner: [
      { id: 1, name: 'Chapathi', image: roomImage, description: 'Soft, whole wheat flatbread served with a variety of curries or vegetable dishes, often a perfect dinner option.', price: '$100' },
      { id: 2, name: 'Roti', image: roomImag, description: 'An unleavened flatbread, similar to chapathi but slightly thinner, served with curries, dals, and vegetables for a hearty dinner meal.', price: '$100' },
      { id: 3, name: 'Annasambar', image: roomIma, description: 'A delicious and spicy South Indian lentil soup made with tamarind, vegetables, and rice, offering a comforting and filling dinner option.', price: '$100' },
    ],
    snacks: [
      { id: 1, name: 'Tea', image: roomImage12, description: 'A warm, refreshing cup of Indian chai made with tea leaves, milk, and a mix of spices like cardamom and ginger, perfect for a snack time treat.', price: '$20' },
      { id: 2, name: 'Coffee', image: roomImage13, description: 'A strong, aromatic South Indian filter coffee brewed to perfection and served with milk and sugar, ideal for a quick snack or energy boost.', price: '$20' },
    ],
  };

  const handleQuantityChange = (id, event) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id]: event.target.value,
    }));
  };

  const handleOrder = async (item, category) => {
    const count = quantity[item.id] || 1;
    const userDetail = userDetails[category][item.id];

    if (!userDetail?.name || !userDetail?.roomName) {
        alert('Please enter your name and room number before placing the order.');
        return;
    }

    const orderInfo = {
      name: userDetail.name,  // ✅ Matches `Name`
      noOfPlates: count,  // ✅ Matches `NoOfPlates`
      roomName: userDetail.roomName  // ✅ Matches `RoomName`
  };

    console.log('📌 Sending order:', orderInfo); // <-- Add this

    try {
        const response = await axios.post('http://localhost:5262/api/order/order', orderInfo);
        console.log('✅ Order placed successfully:', response.data);
        alert('Order placed successfully!');
    } catch (err) {
        console.error('❌ Error placing order:', err.response ? err.response.data : err.message);
        alert(`Failed to place order: ${err.response?.data?.message || err.message}`);
    }
};


  const handleInputChange = (category, id, field, value) => {
    setUserDetails((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [id]: {
          ...prevState[category][id],
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="food-container">
      <h1>Food Menu</h1>

      {/* Menu Category Tabs */}
      <div className="menu-tabs">
        <button onClick={() => setActiveCategory('breakfast')} className={activeCategory === 'breakfast' ? 'active' : ''} style={{color:'black'}}>Breakfast</button>
        <button onClick={() => setActiveCategory('lunch')} className={activeCategory === 'lunch' ? 'active' : ''} style={{color:'black'}}>Lunch</button>
        <button onClick={() => setActiveCategory('dinner')} className={activeCategory === 'dinner' ? 'active' : ''} style={{color:'black'}}>Dinner</button>
        <button onClick={() => setActiveCategory('snacks')} className={activeCategory === 'snacks' ? 'active' : ''} style={{color:'black'}}>Snacks</button>
      </div>

      {/* Display food items based on the active category */}
      <div className="food-list">
        {foodItems[activeCategory].map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>

            {/* Input fields for user name and room name specific to each item */}
            <div className="order-info">
              <input
                type="text"
                placeholder="Enter your Name"
                value={userDetails[activeCategory][item.id]?.name || ''}
                onChange={(e) => handleInputChange(activeCategory, item.id, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Room Name"
                value={userDetails[activeCategory][item.id]?.roomName || ''}
                onChange={(e) => handleInputChange(activeCategory, item.id, 'roomName', e.target.value)}
              />
            </div>

            {/* Dropdown to select quantity */}
            <div className="quantity-container">
              <select
                value={quantity[item.id] || 1}
                onChange={(e) => handleQuantityChange(item.id, e)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num} plate{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            {/* Order button */}
            <button onClick={() => handleOrder(item, activeCategory)} className="order-btn">
              Order
            </button>
          </div>
        ))}
      </div>

      {/* Display success message if the order was placed */}
      {orderSuccess && <div className="order-success">{orderSuccess}</div>}
    </div>
  );
};

export default Food;
