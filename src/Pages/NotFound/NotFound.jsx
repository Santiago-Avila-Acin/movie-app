import React from 'react';

const ErrorMessage = ({message}) => {
  return (
    <div className='error'>
      <p style={{color: "white"}}>{message}</p>
    </div>
  );
}

export default ErrorMessage;
