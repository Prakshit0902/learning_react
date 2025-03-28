import { useState, useCallback, useEffect, useRef } from 'react'

/*
useState : used when a state is changed and ui is changed accordingly
useCallback : when a change in the dependencies occurs update the ui as per a defined callback but memoization is used to cache the method and use it further 
for optimized approach
useEffect: call the callback when the dependencies are changed
useRef : when needed to take the reference 
*/

/*
1. useCallback hook mainly uski dependencies ke memoisation ke liye responsible hai mainly ye methods ke refrence ko apni memory me cache krke rakhta hai taaki component rerender hone par kahi method ka refrence change na ho jae or wo ek new method ki tarah hi treat ho warna uspar depend baaki component bhi fhir se rerender honge kyuki method ka refrence (means address in the memory) change ho gya hai 
2. Wahi useEffect sirf apni dependencies ke behalf par us callback function ko run karwaata agar dependencies change hui to wo useEffect ka callback bhi run hoga jisse uske ander hue task jaise yahan passwordGenerator function ko call krwaana wo invoke ho jaega. Thnk u so much sir ye sab clear krne ke liye. 
*/
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      str += '0123456789'
    }

    if (charAllowed) {
      str += '!@#$%^&*()[]{}`~+-/,._='
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-black bg-gray-700 py-5'>
        <h1 className='text-white text-center mb-5'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden my-5'>
          <input type="text"
            value={password}
            className='outline-none px-3 py-1 w-full bg-indigo-50'
            placeholder='password'
            readOnly
            ref={passwordRef} />
          <button className='bg-blue-500 text-white shrink-0 outline-none px-3 py-1 mx-0'
            onClick={copyPasswordToClipboard}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer' />
            <label>Length :{length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />

            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />

            <label>Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
