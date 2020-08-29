import React from 'react';
const card = (props) => {
  return (
    <div className='card'>
      <h2>{props.name}</h2>
      <p>{props.info}</p>
    </div>
  );
};
export default card;
