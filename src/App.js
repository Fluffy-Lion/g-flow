import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';

const App = () => {

  const [data, setData] = useState("")
  const handleFetch = async () => {
    try {
      let response = await fetch("https://techy-api.vercel.app/api/json")
      if(response.status !== 200){
        throw new Error("oops")
      }
      let info = await response.json()
      setData(info)
    } catch (error){
      console.log(error.message)
    }
  }
  useEffect(() => {
    handleFetch()
  }, [])
  return (
    <div style={{ border: "solid grey 2px" }}>
      <h1>header update</h1>
      <h2>hello from header branch</h2>
      <div>
        <button onClick={handleFetch}>click meh</button>
        <Card data={data}/>
      </div>
    </div>
  )
}
export default App