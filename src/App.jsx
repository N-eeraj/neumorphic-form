import { useState } from 'react'

import LoginForm from '@components/forms/Login'
import RegisterForm from '@components/forms/Register'
import ToggleButton from '@components/Button/Toggle'
import Toast from '@components/Toast'

import LoginCredentialsProvider from '@components/LoginCredentialsProvider'
import { preventSubmit } from '@/utils'
import appStyles from '@styles/app.module.css'

const App = () => {
  const [formType, setFormType] = useState('login')
  const [theme, setTheme] = useState('dark')
  const [toast, setToast] = useState({ show: false, text: null, success: null })

  const CurrentForm = () => {
    if (formType === 'login')
      return <LoginForm onChangeForm={handleFormChange} onToast={handleShowToast} />
    return <RegisterForm onChangeForm={handleFormChange} onToast={handleShowToast} />
  }

  const handleFormChange = form => setFormType(form)
  const handleToggleTheme = theme => setTheme(theme)
  const handleShowToast = data => setToast(data)
  const handleResetToast = () => setToast({ show: false, text: null, success: null })

  return (
    <div className={appStyles.mainBackground} data-theme={theme}>
      <ToggleButton theme={theme} onClick={handleToggleTheme} />

      <form className={appStyles.form} onSubmit={preventSubmit}>
        <LoginCredentialsProvider>
          <CurrentForm />
        </LoginCredentialsProvider>
      </form>

      <Toast show={toast.show} text={toast.text} success={toast.success} onReset={handleResetToast} />
    </div>
  )
}

export default App