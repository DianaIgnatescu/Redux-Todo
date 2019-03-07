import {
  ADD_TODO, MARK_COMPLETE, MARK_INCOMPLETE, DELETE_COMPLETED, DELETE_TODO,
} from '../actions';

const initialState = {
  currentId: 3,
  todos: [
    {
      id: 1,
      value: 'Walk the dog',
      completed: false,
    },
    {
      id: 2,
      value: 'Do cool stuff',
      completed: false,
    },
    {
      id: 3,
      value: 'Go on vacation',
      completed: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { newTodo } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id: state.currentId + 1, value: newTodo, completed: false }],
        currentId: state.currentId + 1,
      };
    }
    case MARK_COMPLETE: {
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
    case MARK_INCOMPLETE: {
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
    case DELETE_COMPLETED: {
      const incompleteTodos = state.todos.filter(todo => !todo.completed);
      return { ...state, todos: incompleteTodos };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      const newTodos = state.todos.filter(todo => todo.id !== id);
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
};

export default reducer;
