import { useState, createContext } from 'react'

export const LoginContext = createContext()

const LoginCredentialsProvider = ({children}) => {
  const [loginCredentials, setLoginCredentials] = useState([])

  return (
    <LoginContext.Provider value={{loginCredentials, setLoginCredentials}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginCredentialsProvider