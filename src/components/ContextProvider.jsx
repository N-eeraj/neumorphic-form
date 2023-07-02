import { useState, createContext } from 'react'

export const AppContext = createContext()

const ContextProvider = ({children}) => {
  const [loginCredentials, setLoginCredentials] = useState([])

  return (
    <AppContext.Provider value={{loginCredentials, setLoginCredentials}}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider