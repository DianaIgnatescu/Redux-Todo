export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const TOGGLE_INCOMPLETE = 'TOGGLE_INCOMPLETE';

export const addToDo = newToDo => ({
  type: ADD_TODO,
  payload: {
    newToDo,
  },
});

export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  payload: {
    id,
  },
});

export const toggleIncomplete = id => ({
  type: TOGGLE_INCOMPLETE,
  payload: {
    id,
  },
});
