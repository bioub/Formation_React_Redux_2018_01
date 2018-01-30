import React from 'react';

export const HelloList = () => {
  const prenoms = ['Romain', 'Edouard', 'Jean'];

  const listItems = prenoms.map((prenom, i) => <li key={i}>{prenom}</li>);
  
  return <ul>
    {listItems}
  </ul>;
};