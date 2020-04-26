import React from 'react';
import './App.css';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

import CountingParent from '../components/Parent/CountingParent';

function App() {
  return (
    <React.Fragment>
      {/* <Nav />
      <Home  /> */}
      <CountingParent />

      <CountingParent />

      <CountingParent />

      <CountingParent />

      <CountingParent />
      
    </React.Fragment>
  );
}

export default App;