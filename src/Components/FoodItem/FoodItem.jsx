import React from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; // Ensure this path is correct

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" /> {/* Ensure rating_stars is correct */}
        </div>
        <p className="food-item-desc">
          {description}
        </p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
