import React from 'react'
import { Character } from './Character'


const App = ({side}) => { 
  const characters = [
    {name: 'Люда Неборабочева', side: 'light'},
    {name: 'Мастер Йод', side: 'light'},
    {name: 'Обиван Кенобов', side: 'light'},
    {name: 'Пол Патин', side: 'dark'},
    {name: 'Дарт Вейдоров', side: 'dark'}
  ]

  if (!side) side = 'light'

  const filteredChars = characters.filter(char => char.side === side)

  return (
    <div className='container'>
      <ul>
        {
          filteredChars.map((char, index) => (
            <Character key={char.name + index} name={char.name} side={char.side} />
          ))
        }
      </ul>      
    </div>
  )
}

export default App
