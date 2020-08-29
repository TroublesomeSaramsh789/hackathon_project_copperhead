import React from 'react';
import './title_one.scss';
const title = (props) => {
  return <p className='title_one'>{props.children}</p>;
};
export default title;
