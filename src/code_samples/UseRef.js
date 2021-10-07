import './App.css'
import { useState, useRef, useEffect } from 'react'

function App() {

  const [value, setValue] = useState('init val')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div className="App">
      <h1>Render counter: {renderCount.current}</h1>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
      <button onClick={focus}>123</button>
      <h2>Past state: {prevValue.current}</h2>
    </div>
  )
}

export default App
