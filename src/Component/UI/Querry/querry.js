import React from 'react';
import './querry.scss';
const querry = (props) => {
  return (
    <div className='cardboard'>
      <img src={props.source} alt={'text'} />
      <div className='feedback'>
        <h2>{props.question}</h2>
        <div>
          <button onClick={props.true}>
            <p>True</p>
          </button>
          <button onClick={props.false}>
            <p>False</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default querry;
