import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({item}) => <div className="TodoItem">{item}</div>

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
};