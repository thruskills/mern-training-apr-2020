import React from 'react';
import './App.css';
import '../components/Lifecycle/LifecycleDemo';
import LifecycleDemo from '../components/Lifecycle/LifecycleDemo';
import ErrorCatcher from '../components/Lifecycle/ErrorCatcher';

function App() {
  return (
    <div>
      {/* We want error catcher componet to catch any errorr that lifecycle demo component will throw */}
      <ErrorCatcher>
        <LifecycleDemo />
      </ErrorCatcher>
    </div>
  );
}

export default App;