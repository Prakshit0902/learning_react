import MyComponent from "./mycomponent"

function App() {

  const username = 'undead_004'
  return (
    
    // below the username is evaluated expression and this is final outcome of js and not direct javascript
    <>

    <h1>Hello {username}</h1>
    <MyComponent />
    </>
  )
}

export default App
