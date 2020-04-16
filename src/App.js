import React from 'react';
import './App.css';
import DrumPad from './DrumPad';

const App = (props) => {
  return(
    <div id='drum-machine' className='container'>
      <h1>Drum Machine Project</h1>
      <div id='display'></div>
      <div id='drum'>
        {props.keys.map((pad,idx)=>(
          <DrumPad text={pad.key} sound={pad.sound} index={idx} />
        ))}
      </div>      
      </div>  
  )
}

export default App;
