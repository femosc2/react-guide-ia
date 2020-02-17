import React from 'react';
import { TodoListContainer } from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoListContainer />
      {/* The todolist which is going to be rendered on the website */}
    </div>
  );
}

export default App;
