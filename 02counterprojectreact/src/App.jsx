import './App.css'
import { useState } from 'react'


function App() {
 
  // let counter = 5
  let [counter,setCounter] = useState(15)

  const addVal = ()=>{
    counter += 1
    setCounter(counter)
    console.log(counter)
    
  }
  const decVal = ()=>{
    counter -= 1
    if (counter <= 0){
      counter = 0
    }
    setCounter(counter)
    console.log(counter)
    
  }

  return (
    <>
    <h1>My First Project</h1>
    <h2>Counter Value : {counter} </h2>
    <button onClick={addVal}>Increment {counter}</button>
    <button onClick={decVal}>Decrement {counter}</button>

    <p>footer : {counter}</p>
    </>
  )
}

export default App
