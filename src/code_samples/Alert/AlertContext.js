import React, { useContext, useReducer } from 'react'

const AlertContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const ALERT_SHOW = 'ALERT_SHOW',
      ALERT_HIDE = 'ALERT_HIDE'

const reducer = (state, action) => {
    switch (action.type) {
        case ALERT_SHOW:
            return {...state, visible: true, text: action.text}

        case ALERT_HIDE:
            return {...state, visible: false}

        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispatch({ type: ALERT_SHOW, text })
    const hide = () => dispatch({ type: ALERT_HIDE })

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}>
            {children}
        </AlertContext.Provider>
    )
}
