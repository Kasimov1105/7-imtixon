import React from 'react';

const Stars = ({ rating }) => {
  if (rating < 0 || rating > 5) {
    throw new Error('Rating must be between 0 and 5');
  }

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} style={{color: index < rating ? '#FFC700' : 'gray'}}>
      ★
    </span>
  ));

  return <div>{stars}</div>;
};

export default Stars;