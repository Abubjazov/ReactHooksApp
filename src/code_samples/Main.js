import React from 'react'
import { useAlert } from './Alert/AlertContext'

export default function Main() {
    const {show} = useAlert()
    return (
        <>
            <h1>Привет из Маин</h1>
            <button onClick={() => show('Это текст из Main.js')}>Вызвать Alert</button>
        </>
    )
}
