import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({items}) => {
  const todoItems = items.map((item, i) => <TodoItem key={i} item={item}/>)

  return <div className="TodoList">{todoItems}</div>;
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};