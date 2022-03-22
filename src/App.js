import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';

const App = () => {

  const [data, setData] = useState("")
  
  return (
    <div >
      <h1>header update</h1>
      <h2>hello from header branch</h2>
      <div>
        <button>click meh</button>
        
      </div>
    </div>
  )
}
export default App