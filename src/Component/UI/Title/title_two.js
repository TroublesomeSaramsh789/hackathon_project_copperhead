import React from 'react';
import './title_two.scss';
const title = (props) => {
  return <p className='title_two'>{props.children}</p>;
};
export default title;
