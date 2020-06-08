import React from 'react';

import './App.css';
import Hello from './Hello.js';

function App(props) {
  return <div>
          Hello from App.js by {props.name} and age is {props.age}
          <br/>
          <Hello></Hello>

          
          </div>
    
}

export default App;
