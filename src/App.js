import React, { useState } from 'react';
import ItemDetailsPrintWrapper from './ItemDetailsPrintWrapper';
import ItemDetailsForm from './ItemDetailsForm';
import LoginForm from './LoginForm';
import './App.css';
import logo from './Hallmark.svg';

const App = () => {
  const [items, setItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleFormSubmit = (formData) => {
    const newItem = {
      ...formData,
      shopName: 'KJB', // Static shop name
      barcode: '10101010101010101010101010101010101010', // Static barcode
      logo: logo, // Static logo
    };
    setItems([...items, newItem]);
  };

  const handleLogin = (credentials) => {
    // Replace this with your authentication logic
    if (credentials.username === 'user' && credentials.password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <ItemDetailsForm onSubmit={handleFormSubmit} />
          {items.length > 0 && <ItemDetailsPrintWrapper items={items} />}
        </>
      )}
    </div>
  );
};

export default App;
