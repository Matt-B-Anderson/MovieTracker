import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import home from './components/home';

function App() {
  return (
    <div className="App">
      <Route
      path='/'
      Component={home}
      />
    </div>
  );
}

export default App;
