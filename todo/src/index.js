import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import * as actions from './actions';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

store.dispatch(actions.addToDo('item1'));
store.dispatch(actions.addToDo('item2'));
// store.dispatch(actions.markComplete(1));
// store.dispatch(actions.toggleComplete(2));
// store.dispatch(actions.toggleComplete(3));
// store.dispatch(actions.toggleIncomplete(1));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
