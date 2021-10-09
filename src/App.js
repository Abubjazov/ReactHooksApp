import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

function App() {  
  const [toggle, setToggle] = useState(false)

  return (
    <div className='container'>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr/>
      <div className={'blocks'}>
        <Transition 
          in={toggle} 
          timeout={{
            enter: 500,
            exit: 300
          }}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div className={`square blue ${state}`}>{state}</div>
          )}
        </Transition>
      </div>      
    </div>
  )
}

export default App
