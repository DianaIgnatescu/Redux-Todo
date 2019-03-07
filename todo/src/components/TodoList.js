import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const { todos, markIncomplete, markComplete, deleteCompleted, deleteTodo } = props;
  return (
    <div className="todo-wrapper">
      {todos.map(todo => (
        <Todo
          id={todo.id}
          key={todo.id}
          completed={todo.completed}
          markIncomplete={markIncomplete}
          markComplete={markComplete}
          deleteCompleted={deleteCompleted}
          deleteTodo={deleteTodo}
          value={todo.value}
        />
      ))}
      <button type="button" className="delete-all" onClick={() => deleteCompleted()}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
