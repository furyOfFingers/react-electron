import React from 'react';
import './App.css';
import Button from './components/Button/Button';
// import Select from './components/Select/Select';
import Table from './components/Table/Table';

const App = () => {

  const tabHead = ['nickName', 'victory %', 'rang', 'damage'];
  const tContent = {
      data: {
        playerOne: {
          a: 14,
          b: 14,
          c: 0
        },
        playerTwo: {
          a: 13,
          b: 9,
          c: 0
        }
      }
  };
  // const selectOptions = [1,2,3];
  // const selectOptionsObj = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];

    return (
      <div className='App'>
        <Button onClick={() => {console.log(33)}} text='push'/>

        {/* <Select options={selectOptions}/> */}
        <Table tContent={tContent} tHeader={tabHead}/>
      </div>
    );
}

export default App;
