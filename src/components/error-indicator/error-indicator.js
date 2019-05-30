import React from 'react';
import iconError from './error.png';

const ErrorIndicator = () => {

  return (
    <div>
      <img src={iconError} alt="icon error"/>
      <h2>Error!</h2>
      <p>Our specialists have already begun to solve it!</p>
    </div>
  )
};

export default ErrorIndicator;