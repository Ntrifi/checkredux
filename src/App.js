import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Addtask from './Component/Addtask'
import ListTask from './Component/ListTask'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Addtask />
      <ListTask />
    </div>
  );
}

export default App;
