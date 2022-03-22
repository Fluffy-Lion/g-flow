import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


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
    <div style={{ border: "solid grey 3px" }}>
      <h1>better title here</h1>
      <h2>hello from leon branch</h2>
      <div>
        <button>click meh</button>
        <Card data={data} />
      </div>
    </div>
  )
}
export default App