import React from 'react'
import { useAlert } from './Alert/AlertContext'

export default function Main() {
    const {toggle} = useAlert()
    return (
        <>
            <h1>Привет из Маин</h1>
            <button onClick={toggle}>Вызвать Alert</button>
        </>
    )
}
