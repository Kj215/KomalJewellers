// src/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [weight, setWeight] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [hallmark, setHallmark] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ itemName, weight, grossWeight, hallmark, size });
    setItemName('');
    setWeight('');
    setGrossWeight('');
    setHallmark('');
    setSize('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item Name:</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
      </div>
      <div>
        <label>Weight:</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      </div>
      <div>
        <label>Gross Weight:</label>
        <input type="text" value={grossWeight} onChange={(e) => setGrossWeight(e.target.value)} required />
      </div>
      <div>
        <label>Hallmark:</label>
        <input type="text" value={hallmark} onChange={(e) => setHallmark(e.target.value)} required />
      </div>
      <div>
        <label>Size:</label>
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} required />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
