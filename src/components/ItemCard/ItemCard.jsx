import React from 'react';
import './ItemCard.css';

const ItemCard = ({ header, items }) => {
  return (
    <div className="item-card-container">
      <div className="item-card-header">{header}</div>
      <div className="item-card-content">
        {items.map((item, index) => (
          <div key={index} className="item-container">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
