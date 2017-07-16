import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchProducts } from './Api/api';

class App extends Component {
  componentDidMount() {
    fetchProducts();
  }
  render() {
    return (
      <div className="App">
        testing....
      </div>
    );
  }
}

export default App;
