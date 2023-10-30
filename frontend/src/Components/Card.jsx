import React from 'react';

function Card({ imageSrc, title, description }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
