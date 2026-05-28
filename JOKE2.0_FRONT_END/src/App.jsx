import { useState } from "react"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router";
import AddJoke from "./AddJoke";
import ShowJoke from "./ShowJoke"



function App() {
  const [jokeToAdd,setJokeToAdd] = useState();

  function jokeAdder(jokerec){
      setJokeToAdd(jokerec);
      console.log(jokeToAdd)
  }

  function jokeToNode(){
    
  }
  return (
    <BrowserRouter>
     <div>
      <ShowJoke
      joke={jokeToAdd}
      />
      <AddJoke
      jokeAdder = {jokeAdder}
      />
    </div>
    </BrowserRouter>
   
  )
}
export default App
