// CarList.js
import React from 'react';
import './CarList.css'; // Import the CSS file

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car, index) => (
        <div key={index} className="car">
          <img src={car.imageURL} alt={`${car.make} ${car.model}`} />
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Price: ${car.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;
