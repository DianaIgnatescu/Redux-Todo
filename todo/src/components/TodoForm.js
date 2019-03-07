/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const handleSubmit = addTodo => (event) => {
  event.preventDefault();
  let todo = '';
  let input = null;
  event.target.childNodes.forEach((child) => {
    if (child.name === 'add-todo') {
      todo = child.value;
      input = child;
    }
  });
  if (!todo) {
    return;
  }
  addTodo(todo);
  input.value = '';
};

const TodoForm = ({ addTodo }) => (
  <form className="form-container" onSubmit={handleSubmit(addTodo)}>
    <input
      name="add-todo"
      type="text"
      placeholder="Add task..."
    />
    <button type="submit">Add</button>
  </form>
);

export default TodoForm;
