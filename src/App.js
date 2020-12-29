import React, { Component } from 'react';
import LoginLayout from './components/login/loginlayout.jsx';
import './App.css';
import Products from './components/products/products.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <LoginLayout /> */}
          <Products />
        </header>
      </div>
    );
  }
}

export default App;
