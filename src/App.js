import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />

          <h2>Welcome to React/Electron</h2>
        </div>

        <p className='App-intro'>Hello Electron!</p>

        <Button onClick={() => {console.log(33)}} text='push'/>
      </div>
    );
  }
}

export default App;
