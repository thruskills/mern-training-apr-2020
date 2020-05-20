import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateExample from './intro/StateExample';
import EffectExample from './intro/EffectExample';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h2>State Example</h2>
      <StateExample />
      {/* <h2>Effect Example</h2>
      <EffectExample /> */}
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
