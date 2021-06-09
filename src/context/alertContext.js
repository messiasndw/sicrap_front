import React, { useState, useMemo } from 'react'

const AlertContext = React.createContext({
                    
})

export const AlertContextProvider = (props) => {

    const [isOpen,setOpen] = useState(false)
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [actions, setActions] = useState({
        
    })

    const value = {
        isOpen, setOpen, body, setBody, title, setTitle, actions, setActions
    }

    return <AlertContext.Provider value={value}>{props.children}</AlertContext.Provider>
}

export default AlertContext