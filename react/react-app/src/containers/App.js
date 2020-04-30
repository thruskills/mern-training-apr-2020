import React from 'react';
import './App.css';
import ControllerInput from '../components/Input/ControllerInput';
import NonNumericComponent from '../components/Input/NonNumericComponent';
import UnControllerInput from '../components/Input/UnControllerInput'

function App() {
  return (
    <div>
      <ControllerInput />
      <NonNumericComponent />
      <UnControllerInput />
    </div>
  );
}

export default App;