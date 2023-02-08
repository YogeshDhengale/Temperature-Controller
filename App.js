import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp]=useState(0)
  const [color, setColor]=useState('')

  useEffect((e)=>{
    if(temp>0){
      setColor('red')
    }
    else if(temp<0){
      setColor('blue')
    }
    else if(temp===0){
      setColor('white')
    }
  })
  return (
    <div className="App">
      <div className="temp" style={{backgroundColor: `${color}`}}>
      <div className="tempHeaading">
        <h1>{temp}</h1>
      </div>
      <div className="btn">
        <button onClick={()=>setTemp(temp+1)}>+</button>
        <button onClick={()=>setTemp(temp-1)}>-</button>
      </div>
      </div>
      
     
    </div>
  );
}

export default App;
