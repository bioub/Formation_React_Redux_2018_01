import React from 'react';
import PropTypes from 'prop-types';

// Stateless Component
// export const Hello = (props) => <div>Hello {props.name}</div>;
export const Hello = ({name = 'Inconnu'}) => <div>Hello {name}</div>;

// Autre moyen de déclarer des valeurs par défaut pour props
Hello.defaultProps = {
  name: 'Inconnu',
};

Hello.propTypes = {
  name: PropTypes.string,
};
/*
const {x, y, z = 10} = coords3d;
console.log(x);
*/