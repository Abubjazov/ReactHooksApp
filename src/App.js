import React, { useEffect, useState } from 'react'
import './App.css'


// function App() {  
//   const [name, setName] = useState(''),
//         [lastName, setLastName] = useState('')

//   const changeNameHandler = e => setName(e.target.value),
//         changeLastNameHandler = e => setLastName(e.target.value)

//   return (
//     <div className="App">
//       <input tupe='text' value={name} onChange={changeNameHandler}/>
//       <input tupe='text' value={lastName} onChange={changeLastNameHandler}/>
//       <hr />
//       <h1>{name} {lastName}</h1>
//     </div>
//   )
// }

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initValue) {
  const [value, setValue] = useState(initValue),
        onChange = e => setValue(e.target.value),
        clear = () => setValue('')

  return {
    bind: {value, onChange},
    value, 
    clear
  }
}

function App() {  
  const input = useInput(''),
        lastName = useInput('')

  useLogger(input.value)
  useLogger(lastName.value)

  return (
    <div className="App">
      <input tupe='text' {...input.bind}/>
      <input tupe='text' {...lastName.bind}/>
      <hr />
      <h1>{input.value} {lastName.value}</h1>
      <button onClick={() => {
        input.clear() 
        lastName.clear()
        }}>Clear</button>
    </div>
  )
}

export default App
