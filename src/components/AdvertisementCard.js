// src/components/AdvertisementCard.js
import React from 'react';

const AdvertisementCard = ({ title, description, contact }) => {
  return (
    <div className="ad-card">
      <div className="ad-image">150 x 150</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Contact: {contact}</p>
      <button className="details-button">Details</button>
    </div>
  );
};

export default AdvertisementCard;
