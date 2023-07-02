import { useState } from 'react'

import LoginForm from '@components/forms/Login'
import RegisterForm from '@components/forms/Register'
import ToggleButton from '@components/Button/Toggle'

import { LoginCredentialsContext } from '@/context'
import { preventSubmit } from '@/utils'
import appStyles from '@styles/app.module.css'

const App = () => {
  const [formType, setFormType] = useState('login')
  const [theme, setTheme] = useState('dark')
  const [loginCredentials, setLoginCredentials] = useState([])

  const handleFormChange = () => setFormType(prevForm => prevForm === 'login' ? 'signUp' : 'login')
  const handleToggleTheme = theme => setTheme(theme)

  return (
    <div className={appStyles.mainBackground} data-theme={theme}>
      <ToggleButton theme={theme} onClick={handleToggleTheme} />

      <form className={appStyles.form} onSubmit={preventSubmit}>
        <LoginCredentialsContext.Provider value={[loginCredentials, setLoginCredentials]}>
          {
            formType === 'login' ?
              <LoginForm onChangeForm={handleFormChange} />
            :
              <RegisterForm onChangeForm={handleFormChange} />
          }
        </LoginCredentialsContext.Provider>
      </form>
    </div>
  )
}

export default App