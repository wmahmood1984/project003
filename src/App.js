import React from 'react';

import './App.css';
import Hello from './Hello.js';

function App(props) {
  return <div>
          Hello from  <strong>{props.name}</strong> and age is {props.age}
          <br/>
          <Hello></Hello>
          <h1>
            About Me
          </h1>
          <h3>
            About my Career
          </h3>
          <ol>
            <li>I am a bachelor in Commerce from Karachi university</li>
            <li>I have done my Chartered Accountancy in 2008 and done my articleship from KPMG</li>
            <li>I am currently working as a senior finance manager in Pakistan Cables Ltd.</li>
          </ol>
          <h3>
            About my Personality
          </h3>
          <ul>
            <li>I have a great sense of responsibilty</li>
            <li>I am good in managing things</li>
            <li>I am here to learn new things</li>
          </ul>

          
          </div>
    
}

export default App;
