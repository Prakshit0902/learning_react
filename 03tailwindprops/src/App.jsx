import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username:'undead_004',
    id:'#335',
    price :'$45'
  }
  let obj2 = {
    username:'undead004',
    id:'#336',
    price :'$50'
  }
  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-xl'>This is a tailwind Component</h1>
    <Card myObj = {obj}/>
    <Card/>
    </>
  )
}

export default App
