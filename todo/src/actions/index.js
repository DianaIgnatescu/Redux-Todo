export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const MARK_INCOMPLETE = 'MARK_INCOMPLETE';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: {
    newTodo,
  },
});

export const markComplete = id => ({
  type: MARK_COMPLETE,
  payload: {
    id,
  },
});

export const markIncomplete = id => ({
  type: MARK_INCOMPLETE,
  payload: {
    id,
  },
});

export const deleteCompleted = id => ({
  type: DELETE_COMPLETED,
  payload: {
    id,
  },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
