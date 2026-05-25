import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    setCount(count + 1)
  },[])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
export default App
