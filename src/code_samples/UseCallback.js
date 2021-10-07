import './App.css'
import { useState, useCallback } from 'react'
import ItemsList from './code_samples/itemsList'

function App() {
  const [count, setCount] = useState(1),
        [colored, setColored] = useState(false),
        styles = {color: colored ? 'darkred' : 'black'}

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, index) => `Элемент ${index + 1}`)
  }, [count])
  
  return (
    <div className="App">
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}> + </button>
      <button onClick={() => setColored(prev => !prev)}> Colored </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  )
}

export default App
