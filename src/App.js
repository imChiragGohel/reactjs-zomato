import React, { Component } from 'react';
import './App.css';
import MainComponent from './components/mainComponent';

class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <React.Fragment>
        <MainComponent></MainComponent>
      </React.Fragment>
    );
  }
}

export default App;
