import React from 'react';

const ServiceCard = ({ title, description, price, unit }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">
        Price: ₹{price} {unit && `per ${unit}`}
      </p>
    </div>
  );
};

export default ServiceCard;
