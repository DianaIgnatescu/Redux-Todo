import { ADD_TODO, TOGGLE_COMPLETE, TOGGLE_INCOMPLETE } from '../actions';

const initialState = {
  currentId: 1,
  todos: [
    {
      id: 1,
      value: 'Walk the dog',
      completed: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { newToDo } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id: state.currentId + 1, value: newToDo, completed: false }],
        currentId: state.currentId + 1,
      };
    }
    case TOGGLE_COMPLETE: {
      const { id } = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            value: todo.value,
            completed: true,
          };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    }
    case TOGGLE_INCOMPLETE: {
      const { id } = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            value: todo.value,
            completed: false,
          };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    }
    default:
      return state;
  }
};

export default reducer;
