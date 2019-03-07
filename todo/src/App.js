/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import {
  addTodo, markComplete, markIncomplete, deleteCompleted, deleteTodo,
} from './actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = props => (
  <div className="App">
    <h1>To Do List</h1>
    <TodoForm addTodo={props.addTodo} />
    <TodoList
      markComplete={props.markComplete}
      markIncomplete={props.markIncomplete}
      todos={props.todos}
      deleteCompleted={props.deleteCompleted}
      deleteTodo={props.deleteTodo}
    />
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {
  addTodo, markComplete, markIncomplete, deleteCompleted, deleteTodo,
})(App);
