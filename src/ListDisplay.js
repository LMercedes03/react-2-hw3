import React from 'react';
import './ListDisplay.css'

export const ListDisplay = (props) => {
  const { list } = props;

  return (
    <div className='ListDisplay'>
      {list.map((animals, index) => (
        <p key={index}>{animals}</p>
      ))}
    </div>
  )
};