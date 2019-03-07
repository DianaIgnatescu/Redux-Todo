/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Todo = (props) => {
  const {
    value, id, completed, markIncomplete, markComplete, deleteTodo
  } = props;

  if (completed === true) {
    return (
      <div className="list-item-container">
        <li
          key={id}
          className="list-item item-completed"
          onClick={() => markIncomplete(id)}
        >
          {value}
        </li>
        <button type="button" className="delete" onClick={() => deleteTodo(id)}>DELETE</button>
      </div>

    );
  }
  return (
    <div className="list-item-container">
      <li
        key={id}
        className="list-item"
        onClick={() => markComplete(id)}
      >
        {value}
      </li>
      <button type="button" className="delete" onClick={() => deleteTodo(id)}>DELETE</button>
    </div>
  );
};

export default Todo;
