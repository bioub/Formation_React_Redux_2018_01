import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counts } from './reducers/count';

const store = createStore(counts, composeWithDevTools());

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
