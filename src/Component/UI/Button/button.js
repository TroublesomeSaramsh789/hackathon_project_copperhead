import React from 'react';
import './button.scss';
const button = (props) => {
  return <button onClick={props.Click}>{props.children}</button>;
};
export default button;
