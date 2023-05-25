import React from 'react';
import { ListDisplay } from './ListDisplay';
import './App.css'

function App() {
  const animals = ['🐶 Dog', '😾 Cat', '🐔 Chicken', '🐮 Cow', '🐑 Sheep', '🐎Horse'];

  return (
    <div className='App'>
      <ListDisplay list={animals} />
    </div>
  );
}

export default App;