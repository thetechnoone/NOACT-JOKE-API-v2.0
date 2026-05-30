import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import cors from "cors"
import { BrowserRouter, Routes, Route, Link } from "react-router";
import AddJoke from "./AddJoke";
import ShowJoke from "./ShowJoke"



function App() {
  const [jokeToAdd,setJokeToAdd] = useState();
  const [jokeFNode,setJokeFNode] = useState();

  // function jokeAdder(jokerec){
  //     setJokeToAdd(jokerec);
  //     console.log(jokeToAdd)
  // }

  async function jokeToNode(jokerec){
      try{
          const response = await axios.post(" http://localhost:3000/addjoke",{
            title:"test",
            body:jokerec
          })
          console.log(response.data)
      }
      catch(error){
        console.log(error)
      }
  }
  return (
    <BrowserRouter>
     <div>
      <ShowJoke
      joke={jokeToAdd}
      />
      <AddJoke
      jokeAdder = {jokeToNode}
      />
    </div>
    </BrowserRouter>
   
  )
}
export default App
