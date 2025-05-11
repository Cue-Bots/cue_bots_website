import React from 'react';
import './Partner.css';

const Barre = ({ width, height }) => {
  return (
    <div
      className="Barre"
      style={{ width: width, height: height }}
    ></div>
  );
};

export default Barre;