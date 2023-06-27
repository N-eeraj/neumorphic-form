import { useState } from "react"

import LoginForm from '@components/forms/Login'
import RegisterForm from '@components/forms/Register'

import ToggleButton from '@components/Button/Toggle'

import { preventSubmit } from '@/utils'

import appStyles from '@styles/app.module.css'

const App = () => {
  const [formType, setFormType] = useState('login')
  const [theme, setTheme] = useState('dark')

  const handleFormChange = () => setFormType(prevForm => prevForm === 'login' ? 'signUp' : 'login')
  const handleToggleTheme = () => setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')

  const handleSubmit = data => console.log(data)

  return (
    <div className={appStyles.mainBackground} data-theme={theme}>
      <form className={appStyles.form} onSubmit={preventSubmit}>
        {
          formType === 'login' ?
            <LoginForm onChangeForm={handleFormChange} onSubmit={handleSubmit} />
          :
            <RegisterForm onChangeForm={handleFormChange} onSubmit={handleSubmit} />
        }
      </form>

      <ToggleButton onClick={handleToggleTheme} />
    </div>
  )
}

export default App