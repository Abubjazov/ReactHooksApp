import { useState } from 'react'
import './App.css'

function computeInitCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(computeInitCounter())
  const [counter, setCounter] = useState(() => computeInitCounter())

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)

    // setCounter((prevCounter) => {
    //   return prevCounter + 1
    // })

    setCounter(prevCounter => prevCounter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateName() {
    setState(prev => {
      return {
        ...prev, title: 'New name'
      }
    })
  }

  return (
    <div className="App">
      <h1>Счётчик: {counter}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
      {/* <button onClick={() => setState({title: 'New name'})}>Изменить название</button> */}
      <button onClick={updateName}>Изменить название</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App
