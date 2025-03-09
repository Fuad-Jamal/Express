import React from 'react';
import './App.css';
import InputTodo from  '../src/components/InputTodo';
import ListTodos from '../src/components/listTodos';


function App() {
  return (
    <>
    <div className="container">
    <InputTodo />
    <ListTodos />
    </div>
    </>
  );
}

export default App;
