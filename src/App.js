import React from 'react'
import './App.css'
import Main from './code_samples/Main'
import Alert from './code_samples/Alert/Alert'
import { AlertProvider } from './code_samples/Alert/AlertContext'

function App() {  
  return (
    <AlertProvider>
      <div className="App">
        <Alert />
        <Main />
      </div>
      </AlertProvider>
  )
}

export default App
