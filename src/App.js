import React, { useState } from 'react';
import './App.css';  // Import the CSS file
import appleImg from './images/apple.jpg';
import bananaImg from './images/banana.jpg';
import orangeImg from './images/orange.jpg';
import pearImg from './images/pear.jpg';
import grapeImg from './images/grape.jpg';
import cherryImg from './images/cherry.jpg';
 
const fruits = [
  { id: 1, name: 'Apfel', categories: ['Rot', 'Frisch'], price: 2, image: appleImg },
  { id: 2, name: 'Banane', categories: ['Gelb', 'Reif'], price: 1.5, image: bananaImg },
  { id: 3, name: 'Orange', categories: ['Orange', 'Frisch'], price: 2.5, image: orangeImg },
  { id: 4, name: 'Trauben', categories: ['Lila', 'Süß'], price: 3, image: grapeImg },
  { id: 5, name: 'Birne', categories: ['Grün', 'Knackig'], price: 2, image: pearImg },
  { id: 6, name: 'Kirsche', categories: ['Rot', 'Süß'], price: 4, image: cherryImg }
];
 
const App = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
 
  const handleFruitChange = (event) => {
    setSelectedFruit(parseInt(event.target.value));
    setFilterCategory('');
  };
 
  const handleCategoryFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };
 
  const renderFruits = () => {
    const filteredFruits = fruits.filter(fruit => filterCategory ? fruit.categories.includes(filterCategory) : true);
    return (
      <div className="fruit-cards">
        {filteredFruits.map(fruit => (
          <div key={fruit.id} className={`fruit-card ${selectedFruit === fruit.id ? 'selected' : ''}`}>
            <input
              type="radio"
              id={`fruit-${fruit.id}`}
              value={fruit.id}
              checked={selectedFruit === fruit.id}
              onChange={handleFruitChange}
              className="fruit-radio"
            />
            <label htmlFor={`fruit-${fruit.id}`}>
              <img src={fruit.image} alt={fruit.name} />
              <span>{fruit.name}</span>
            </label>
            <div className="details">
              <div>Kategorie: {fruit.categories.includes(filterCategory) ? filterCategory : 'Alle'}</div>
              <div>Preis: {fruit.price} CHF</div>
            </div>
          </div>
        ))}
      </div>
    );
  };
 
  return (
    <div className="app">
      <h1>Früchte-Shop</h1>
      <div className="filters">
        <label htmlFor="fruitFilter">Frucht:</label>
        <select id="fruitFilter" value={selectedFruit} onChange={handleFruitChange}>
          <option value="">Alle</option>
          {fruits.map(fruit => (
            <option key={fruit.id} value={fruit.id}>{fruit.name}</option>
          ))}
        </select>
        <label htmlFor="categoryFilter">Kategorie:</label>
        <select id="categoryFilter" value={filterCategory} onChange={handleCategoryFilterChange}>
          <option value="">Alle</option>
          <option value="Rot">Rot</option>
          <option value="Gelb">Gelb</option>
          <option value="Orange">Orange</option>
          <option value="Lila">Lila</option>
          <option value="Grün">Grün</option>
          <option value="Frisch">Frisch</option>
          <option value="Reif">Reif</option>
          <option value="Süß">Süß</option>
          <option value="Knackig">Knackig</option>
        </select>
      </div>
      {renderFruits()}
    </div>
  );
};
 
export default App;
 
