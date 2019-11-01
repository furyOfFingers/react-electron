import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Select from './components/Select/Select';

const App = () => {

  const selectOptions = [1,2,3];
  const selectOptionsObj = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

    return (
      <div className='App'>
        <Button onClick={() => {console.log(33)}} text='push'/>

        <Select options={selectOptions}/>
      </div>
    );
}

export default App;
