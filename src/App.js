import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Button onClick={() => {console.log(33)}} text='push'/>
      </div>
    );
  }
}

export default App;
