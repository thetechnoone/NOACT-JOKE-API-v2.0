import { useState } from "react"

function AddJoke({jokeAdder}){
    const [joke,setJoke] = useState()

    function handleChange(event) {
       const {name,value} = event.target
       setJoke(value)
    };
return(

    <div className="addcontainer">
        <h2>
            Add a Joke
        </h2>

        <textarea name = "jokefield" required onChange={(e)=>{handleChange(e)}}>
        </textarea>

        <button onClick={()=>{jokeAdder(joke)}}>Submit</button>
    </div>
)
    
    
}
export default AddJoke 