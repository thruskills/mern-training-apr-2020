import React from 'react';
import './App.css';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Home  />
    </React.Fragment>
  );
}

export default App;