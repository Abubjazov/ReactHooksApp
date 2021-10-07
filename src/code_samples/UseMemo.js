import './App.css'
import { useState, useMemo } from 'react'

function complexCompute(numb) {
  let i = 0 

  while (i < 1000000000) i++
  return numb * 2
}

function App() {
  const [number, setNumber] = useState(42),
        [colored, setColored] = useState(false),
        computed = useMemo(() => complexCompute(number), [number]),
        styles = {color: colored ? 'darkred' : 'black'}

  return (
    <div className="App">
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}> + </button>
      <button onClick={() => setNumber(prev => prev - 1)}> - </button>
      <button onClick={() => setColored(prev => !prev)}> Colored </button>
    </div>
  )
}

export default App
