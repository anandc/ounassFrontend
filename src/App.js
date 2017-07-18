import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './store/configureStore';
import { searchAction } from './actions/productActions';
import Products from './containers/products.js';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Products />
      </Provider>
    );
  }
}

export default App;
