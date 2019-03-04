export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addToDo = newToDo => ({
  type: ADD_TODO,
  payload: {
    newToDo,
  },
});

export const toggleComplete = () => ({
  type: TOGGLE_COMPLETE,
});
